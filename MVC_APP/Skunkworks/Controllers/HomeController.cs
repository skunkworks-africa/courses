using Skunkworks.data;
using Skunkworks.data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Skunkworks.Controllers
{
    public class HomeController : Controller
    {
       private SkunkContext db = new SkunkContext();
        public ActionResult Index()
        {
            return View();
        }

        public PartialViewResult TotalUsers()
        {
            #region Get the Percentage Values

            var lastTwoWeekUsers = DateTime.UtcNow.Date.AddDays(-14);
            var lastWeekUsers = DateTime.UtcNow.Date.AddDays(-7);

            double countForLastTwoWeeks = db.Users.Where(x => x.DateCreated >= lastTwoWeekUsers).Count();
            double countForLastWeeks = db.Users.Where(x => x.DateCreated >= lastWeekUsers).Count();

            double difference = countForLastTwoWeeks - countForLastWeeks;
            double average = (countForLastTwoWeeks + countForLastWeeks) / 2;
            double percentDifference = difference / average * 100;
            percentDifference = Math.Round(percentDifference, 2);
            ViewBag.Average = percentDifference;
            #endregion

            var userCount = db.Users.Count();

            return PartialView("_UserCount", userCount);
        }

        //[ChildActionOnly]
        public ActionResult ProjectList()
        {
            var projList = new List<Projects>();

            SkunkContext db = new SkunkContext();

            var projectList = db.Projects.ToList();
            projList = projectList;

            return PartialView("_Projects", projList);
        }
    }
}