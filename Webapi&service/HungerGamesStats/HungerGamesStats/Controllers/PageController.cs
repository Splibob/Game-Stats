using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HungerGamesStats.Controllers
{
    public class PageController : Controller
    {
        public ActionResult GetPage()
        {
            return new FilePathResult("~/Views/Page/GetPage.html", "text/html");
        }

        public ActionResult PostPage()
        {
            return new FilePathResult("~/Views/Page/PostPage.html", "text/html");
        }

        public ActionResult PutPage()
        {
            return new FilePathResult("~/Views/Page/PutPage.html", "text/html");
        }

        public ActionResult DeletePage()
        {
            return new FilePathResult("~/Views/Page/DeletePage.html", "text/html");
        }

        // to reach here you need to browse to:
        // http://localhost:49860/page/GetJQuery
        public ActionResult GetJQuery()
        {
            return new FilePathResult("~/Views/Page/GetJQuery.html", "text/html");
        }

        public ActionResult PostJQuery()
        {
            return new FilePathResult("~/Views/Page/PostJQuery.html", "text/html");
        }

        public ActionResult PutJQuery()
        {
            return new FilePathResult("~/Views/Page/PutJQuery.html", "text/html");
        }

        public ActionResult DeleteJQuery()
        {
            return new FilePathResult("~/Views/Page/DeleteJQuery.html", "text/html");
        }

        public ActionResult TheAvatarPage()
        {
            return new FilePathResult("~/Views/Page/TheAvatarPage.html", "text/html");
        }

        public ActionResult JQueryAvatarPage()
        {
            return new FilePathResult("~/Views/Page/JQueryAvatarPage.html", "text/html");
        }
        public ActionResult TheWatcherInTheWater()
        {
            return new FilePathResult("~/Views/Page/TheWatcherInTheWater.html", "text/html");
        }
        public ActionResult YearsOfWaiting()
        {
            return new FilePathResult("~/Views/Page/YearsOfWaiting.html", "text/html");
        }
    }
}