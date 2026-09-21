using Microsoft.AspNetCore.Mvc;

namespace macchindrabagstore.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}