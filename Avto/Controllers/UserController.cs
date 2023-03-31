using Microsoft.AspNetCore.Mvc;

namespace Avto.Controllers;

public class UserController : Controller
{
    // GET
    public IActionResult Login()
    {
        return View();
    }

    public IActionResult Register()
    {
        return View();
    }
}