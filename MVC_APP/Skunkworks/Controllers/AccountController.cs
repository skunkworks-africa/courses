using Skunkworks.data;
using Skunkworks.data.Entities;
using Skunkworks.data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using System.Data.Entity;
using System.IO;
using System.Reflection;
using System.Web.Security;

namespace Skunkworks.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Login()
        {
            return RedirectToAction("index", "Login");
        }

        [HttpGet]
        public ActionResult UserProfile()
        {
            var email = Request.Cookies.Get("Email")?.Value;

            if (string.IsNullOrEmpty(email))
                return RedirectToAction("Index", "Home");

            using (var db = new SkunkContext())
            {
                var user = db.Users
                    .Where(x => x.EmailAddress == email)
                    .FirstOrDefault();

                if (user is null)
                    return RedirectToAction("Index", "Home");

                return View(user);
            }
        }

        public ActionResult Registration()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Registration(RegistrationModelAdmin user)
        {
            bool status = false;
            string message = string.Empty;
            ViewBag.Status = status;

            #region Validation
            if (!ModelState.IsValid)
            {
                ViewBag.Message = "Please fill in all fields";
                return View(user);
            }

            if (user.Password != user.ConfirmPassword)
            {
                ViewBag.Message = "Passwords do not match.";
                return View(user);
            }

            if (CheckEmailExists(user.EmailAddress))
            {
                ModelState.AddModelError("EmailExist", "Email already exist");
                ViewBag.Message = "Email already exist";
                return View(user);
            }
            #endregion

            var ActivationCode = Guid.NewGuid();
            user.Password = Crypto.Hash(user.Password);
            var IsEmailVerified = false;

            using (var db = new SkunkContext())
            {
                db.Users.Add(new User
                {
                    EmailAddress = user.EmailAddress,
                    ActivationCode = ActivationCode,
                    FirstName = user.FirstName,
                    IsEmailVerified = IsEmailVerified,
                    LastName = user.LastName,
                    Password = user.Password,
                    IsAdmin = false,
                    UserRole = "0",
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now
                });
                db.SaveChanges();

                SendVerificationLinkEmail(user.EmailAddress, ActivationCode.ToString());
                message = $"Registration successful. Account activiation link has been sent to your email adress: {user.EmailAddress}";
                status = true;
            }

            ViewBag.Message = message;
            ViewBag.Status = status;
            return View(user);
        }

        [NonAction]
        public bool CheckEmailExists(string emailAddress)
        {
            using (SkunkContext dc = new SkunkContext())
            {
                var v = dc.Users.Where(a => a.EmailAddress == emailAddress).FirstOrDefault();
                return v != null;
            }
        }

        [NonAction]
        public void SendVerificationLinkEmail(string emailAddress, string activationCode)
        {
            var verifyUrl = "/Account/VerifyAccount/" + activationCode;
            var link = Request.Url.AbsoluteUri.Replace(Request.Url.PathAndQuery, verifyUrl);

            var fromEmail = new MailAddress("noreply@manageitonline.co.za", "ManageIt login/Registration");
            var toEmail = new MailAddress(emailAddress);
            var fromEmailPassword = "jayden8808!!"; // Replace with actual password
            string subject = "Your account is successfully created!";

            string body = "<br/><br/>We are excited to tell you that your Skunkworks account is" +
                " successfully created. Please click on the below link to verify your account" +
                " <br/><br/><a href='" + link + "'>" + link + "</a> ";

            var smtp = new SmtpClient
            {
                Host = "mail.manageitonline.co.za",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromEmail.Address, fromEmailPassword)
            };

            using (var message = new MailMessage(fromEmail, toEmail)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            })
                smtp.Send(message);
        }

        [HttpGet]
        public ActionResult VerifyAccount(string id)
        {
            bool Status = false;
            using (SkunkContext dc = new SkunkContext())
            {
                dc.Configuration.ValidateOnSaveEnabled = false; // This line I have added here to avoid 
                                                                // Confirm password does not match issue on save changes
                var v = dc.Users.Where(a => a.ActivationCode == new Guid(id)).FirstOrDefault();
                if (v != null)
                {
                    v.IsEmailVerified = true;
                    dc.SaveChanges();
                    Status = true;
                }
                else
                {
                    ViewBag.Message = "Invalid Request";
                }
            }
            ViewBag.Status = Status;
            return RedirectToAction(nameof(Login));
        }

        public PartialViewResult ProfileImage()

        {
            using (var db = new SkunkContext())
            {
                var useremail = Request.Cookies["Email"].Value;
                var userinfo = db.Users
                    .Where(i => i.EmailAddress == useremail).FirstOrDefault();
                var userImage = userinfo.Image;

                return PartialView("_ProfileImage", userImage);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult EditImage(User user, HttpPostedFileBase file)
        {
            AddImage(user, file);

            if (file == null)
                return RedirectToAction(nameof(UserProfile));
            else
                return RedirectToAction(nameof(UserProfile), new { Id = user.Id });
        }

        public ActionResult AddImage(User user, HttpPostedFileBase file)
        {
            if (file == null)
                return RedirectToAction(nameof(UserProfile), new { Id = user.Id });

            var imageData = string.Empty;
            using (var reader = new MemoryStream())
            {
                file.InputStream.CopyTo(reader);
                var buffer = new byte[reader.Length];
                int read;
                while ((read = reader.Read(buffer, 0, buffer.Length)) > 0)
                    reader.Write(buffer, 0, read);
                var at = reader.ToArray();
                imageData = Convert.ToBase64String(at);
            }

            using (var db = new SkunkContext())
            {
                var dbUser = db.Users.Find(user.Id);
                dbUser.Image = imageData;
                db.Entry(dbUser).State = EntityState.Modified;
                db.SaveChanges();
            }
            return RedirectToAction(nameof(UserProfile));
        }

        [HttpGet]
        public ActionResult Edit()
        {
            var email = Request.Cookies.Get("EmailAddress")?.Value;

            if (string.IsNullOrEmpty(email))
                return RedirectToAction("Index", "Home");

            using (var db = new SkunkContext())
            {
                var user = db.Users
                    .Where(x => x.EmailAddress == email)
                    .FirstOrDefault();

                if (user is null)
                    return RedirectToAction("Index", "Login");

                return View(user);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(User user)
        {

            using (var db = new SkunkContext())
            {
                //var userRolecookie = Request.Cookies.Get("UserRole")?.Value;
                //user.UserRole = userRolecookie.ToString();


                var useremail = Request.Cookies["Email"].Value;
                var userimage = db.Users
                    .Where(i => i.EmailAddress == useremail)
                    .Select(i => i.Image)
                    .FirstOrDefault();

                user.Image = userimage;

                user.DateModified = DateTime.Now;

                db.Entry(user).State = EntityState.Modified;
                db.SaveChanges();
            }

            Response.SetCookie(new HttpCookie("Email", user.EmailAddress));
            ViewBag.Message = string.Format("Please Log back in for changed to take effect");
            return RedirectToAction(nameof(UserProfile));
        }

        [HttpPost]
        public ActionResult UpdatePassword(User user, string OldPassword, string NewPassword, string ConfirmPassword)
        {
            TempData["alert"] = "text-danger";

            if (string.IsNullOrEmpty(NewPassword) || string.IsNullOrEmpty(ConfirmPassword) || string.IsNullOrEmpty(OldPassword))
            {
                TempData["Message"] = "Password fields are empty!";
                return RedirectToAction(nameof(Edit));
            }


            if (NewPassword != ConfirmPassword)
            {
                TempData["Message"] = "Passwords do not match!";
                return RedirectToAction(nameof(Edit));
            }


            using (var db = new SkunkContext())
            {
                var dbUser = db.Users.Find(user.Id);

                if (dbUser is null)
                    return RedirectToAction(nameof(Edit));

                if (dbUser.Password != Crypto.Hash(OldPassword))
                {
                    TempData["Message"] = "Invalid Password";
                    return RedirectToAction(nameof(Edit));
                }

                dbUser.Password = Crypto.Hash(NewPassword);

                db.Entry(dbUser).State = EntityState.Modified;
                db.SaveChanges();

                TempData["Message"] = "Password Updated!";
                TempData["alert"] = "text-success";
                return RedirectToAction(nameof(Edit));
            }
        }

        public ActionResult ManageUsers()
        {
            SkunkContext db = new SkunkContext();

            return View(db.Users.ToList());
        }

        public ActionResult EditUser(int? id)
        {
            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            using (var db = new SkunkContext())
            {
                var userDetails = db.Users
                    .Where(p => p.Id == id)
                    .FirstOrDefault();
                if (userDetails == null)
                    return HttpNotFound();

                return View(userDetails);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult EditUser(User user)
        {
            SkunkContext db = new SkunkContext();

            db.Entry(user).State = EntityState.Modified;
            db.SaveChanges();

            return RedirectToAction(nameof(ManageUsers));
        }

        public ActionResult AddUser()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult AddUser(RegistrationModelAdmin user)
        {
            bool status = false;
            string message = string.Empty;
            ViewBag.Status = status;

            #region Validation
            if (!ModelState.IsValid)
            {
                ViewBag.Message = "Please fill in all fields";
                return View(user);
            }

            if (user.Password != user.ConfirmPassword)
            {
                ViewBag.Message = "Passwords do not match.";
                return View(user);
            }

            if (CheckEmailExists(user.EmailAddress))
            {
                ModelState.AddModelError("EmailExist", "Email already exist");
                ViewBag.Message = "Email already exist";
                return View(user);
            }
            #endregion

            var ActivationCode = Guid.NewGuid();
            user.Password = Crypto.Hash(user.Password);
            var IsEmailVerified = false;

            using (var db = new SkunkContext())
            {
                db.Users.Add(new User
                {
                    EmailAddress = user.EmailAddress,
                    ActivationCode = ActivationCode,
                    FirstName = user.FirstName,
                    IsEmailVerified = IsEmailVerified,
                    LastName = user.LastName,
                    Password = user.Password,
                    IsAdmin = false,
                    UserRole = "0",
                    City = user.City,
                    StreetNameAndNumber = user.StreetNameAndNumber,
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now
                });
                db.SaveChanges();

                SendVerificationLinkEmail(user.EmailAddress, ActivationCode.ToString());
                message = $"Registration successful. Account activiation link has been sent to your email adress: {user.EmailAddress}";
                status = true;
            }

            ViewBag.Message = message;
            ViewBag.Status = status;
            return View(user);
        }

        public ActionResult ManageSkills()
        {
            SkunkContext db = new SkunkContext();

            return View(db.Skills.ToList());
        }

        public ActionResult AddSkills()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult AddSkills(Skills skills)
        {
            using (var db = new SkunkContext())
            {
                db.Skills.Add(new Skills
                {
                    Name = skills.Name,
                });
                db.SaveChanges();
            }
            return RedirectToAction(nameof(ManageSkills));
        }

        [HttpGet]
        public ActionResult EditSkills(int? id)
        {
            using (var db = new SkunkContext())
            {
                var skill = db.Skills
                    .Where(p => p.Id == id)
                    .FirstOrDefault();

                if (skill is null)
                    return RedirectToAction("Index", "Login");

                return View(skill);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult EditSkills(Skills skills)
        {
            if (!ModelState.IsValid)
            {
                return View(skills);
            }
            SkunkContext db = new SkunkContext();
           
                db.Entry(skills).State = EntityState.Modified;
                db.SaveChanges();

                if (skills is null)
                    return RedirectToAction("Index", "Login");

                return RedirectToAction(nameof(ManageSkills));
        }

        public ActionResult DeleteSkill(int? id)
        {
            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            using (var db = new SkunkContext())
            {
                var skill = db.Skills
                     .Where(p => p.Id == id)
                    .FirstOrDefault();

                if (skill == null)
                    return HttpNotFound();

                return View(skill);
            }
        }

        [HttpPost, ActionName("DeleteSkill")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteSkillConfirmed(int id)
        {
            using (var db = new SkunkContext())
            {
                var skill = db.Skills.Find(id);
                db.Skills.Remove(skill);
                db.SaveChanges();
            }
            TempData["Message"] = "skill Deleted";
            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            Request.Cookies.Clear();
            Response.Cookies["Email"].Expires = DateTime.Now.AddDays(-1d);
            return RedirectToAction("Index", "Login");
        }
    }
}