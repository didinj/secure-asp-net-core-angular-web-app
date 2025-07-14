using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SecureWebApp.Models;

namespace SecureWebApp.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class BookController(AppDbContext context) : ControllerBase
{
    private readonly AppDbContext _context = context;

    [HttpGet]
    public async Task<IActionResult> GetBooks()
    {
        var data = await _context.Books.ToListAsync();
        return Ok(data);
    }
}