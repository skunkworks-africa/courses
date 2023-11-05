using Skunkworks.data;
using Skunkworks.data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using System.Web.Security;

namespace Skunkworks.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        private SkunkContext db = new SkunkContext();
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(UserLogin login, string ReturnUrl = "")
        {
            if (!ModelState.IsValid)
            {
                TempData["Message"] = "Invalid Login";
                //return RedirectToAction(nameof(LoginRegistration));
            }

            using (var db = new SkunkContext())
            {
                var user = db.Users.Where(_user => _user.EmailAddress == login.EmailAddress).FirstOrDefault();

                if (user == null)
                {
                    TempData["Message"] = "Invalid Login";
                    return View();
                }

                if (!user.IsEmailVerified)
                {
                    TempData["Message"] = "Email address not verified.";
                    return View();
                }
                var hashedP = Crypto.Hash(login.Password);
                var hashedPa = Crypto.Hash(login.Password);

                if ((Crypto.Hash(login.Password) != user.Password))
                {
                    TempData["Message"] = "Invalid Login";
                    return View();
                }
            }

            var timeout = login.RememberMe ? 52560 : 20;
            var ticket = new FormsAuthenticationTicket(login.EmailAddress, login.RememberMe, timeout);
            var encrypted = FormsAuthentication.Encrypt(ticket);

            var cookie = new HttpCookie(FormsAuthentication.FormsCookieName, encrypted)
            {
                Expires = DateTime.Now.AddMinutes(timeout),
                HttpOnly = true
            };

            Response.Cookies.Add(cookie);
            Response.Cookies.Add(new HttpCookie("Email", login.EmailAddress));

            var username = db.Users
                           .Where(m => m.EmailAddress == login.EmailAddress)
                           .Select(m => m.FirstName)
                           .SingleOrDefault();
            Response.Cookies.Add(new HttpCookie("FirstName", username));

            var jobtitle = db.Users
                           .Where(m => m.EmailAddress == login.EmailAddress)
                           .Select(m => m.JobTitle)
                           .SingleOrDefault();
            Response.Cookies.Add(new HttpCookie("JobTitle", jobtitle));


            if (Url.IsLocalUrl(ReturnUrl))
                return Redirect(ReturnUrl);

            return RedirectToAction("Index", "Home");
        }

        [Authorize]
        public ActionResult Details()
        {
            return View(db.Users.ToList());
        }
    }
}