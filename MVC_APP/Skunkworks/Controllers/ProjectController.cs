using Skunkworks.data;
using Skunkworks.data.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;

namespace Skunkworks.Controllers
{
    public class ProjectController : Controller
    {
        // GET: Project
        public ActionResult Index()
        {
            SkunkContext db = new SkunkContext();

            return View(db.Projects.ToList());
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Projects projects)
        {
            using (var db = new SkunkContext())
            {
                db.Projects.Add(new Projects
                {
                    Name = projects.Name,
                    About = projects.About,
                    DueDate = projects.DueDate,
                    Budget = projects.Budget,
                    Links = projects.Links,
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now
                    //AssignTo = projects.AssignTo,
                    //Status = projects.Status
                }) ;
                db.SaveChanges();

            }
            return RedirectToAction(nameof(Index));
        }

       

        public ActionResult DeleteProject(int? id)
        {
            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            using (var db = new SkunkContext())
            {
                var projects = db.Projects
                     .Where(p => p.Id == id)
                    .FirstOrDefault();

                if (projects == null)
                    return HttpNotFound();

                return View(projects);
            }
        }

        [HttpPost, ActionName("DeleteProject")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteProjectConfirmed(int id)
        {
            using (var db = new SkunkContext())
            {
                var projects = db.Projects.Find(id);
                db.Projects.Remove(projects);
                db.SaveChanges();
            }
            TempData["Message"] = "Project Deleted";
            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        public ActionResult EditProject(int? id)
        {
            using (var db = new SkunkContext())
            {
                var status = new SelectList(new[]
         {
                new { value = "1", Name = "--SELECT--" },
                new { value = "Pending", Name = "Pending" },
                new { value = "Approved", Name = "Approved" },
                 new { value = "Denied", Name = "Denied" },
            },
         "value", "Name", 1);

                ViewData["dropDownList"] = status;

                var projects = db.Projects
                    .Where(p => p.Id == id)
                    .FirstOrDefault();

                ViewBag.UserId = db.Users.ToList();

                if (projects is null)
                    return RedirectToAction("Index", "Login");

                return View(projects);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult EditProject(Projects projects)
        {
            if (!ModelState.IsValid)
            {
                return View(projects);
            }
            SkunkContext db = new SkunkContext();

            var status = Request.Form["status"].ToString();
            projects.Status = status;
            projects.DateModified = DateTime.Now;

            db.Entry(projects).State = EntityState.Modified;
            db.SaveChanges();

            if (projects is null)
                return RedirectToAction("Index", "Login");

            return RedirectToAction(nameof(Index));
        }
    }
}