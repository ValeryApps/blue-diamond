﻿using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
	public class Fallback : Controller
	{
		// GET
		public IActionResult Index()
		{
			return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(),
				"wwwroot/index.html"), "text/HTML");
		}
	}
}