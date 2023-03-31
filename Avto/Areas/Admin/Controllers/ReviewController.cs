using Microsoft.AspNetCore.Mvc;

namespace Avto.Areas.Admin.Controllers;

[Area("Admin")]
public class ReviewController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}