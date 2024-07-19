using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserManagementApi.Models;

[Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{

    // private readonly UserManagementContext _context;

    // public UsersController(UserManagementContext context)
    // {
    //     _context = context;
    // }

    // [HttpGet]
    // public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    // {
    //     return await _context.Users.ToListAsync();
    // }

    // [HttpPost]
    // public async Task<ActionResult<User>> CreateUser(User user)
    // {
    //     if (_context.Users.Any(u => u.UserName == user.UserName))
    //     {
    //         return Conflict("Username already exists.");
    //     }

    //     _context.Users.Add(user);
    //     await _context.SaveChangesAsync();
    //     return CreatedAtAction(nameof(GetUser), new { id = user.UserId }, user);
    // }

    // [HttpGet("{id}")]
    // public async Task<ActionResult<User>> GetUser(long id)
    // {
    //     var user = await _context.Users.FindAsync(id);
    //     if (user == null)
    //     {
    //         return NotFound();
    //     }

    //     return user;
    // }

    // [HttpPut("{id}")]
    // public async Task<IActionResult> UpdateUser(long id, User user)
    // {
    //     if (id != user.UserId)
    //     {
    //         return BadRequest();
    //     }

    //     _context.Entry(user).State = EntityState.Modified;
    //     await _context.SaveChangesAsync();
    //     return Ok();
    // }

    // [HttpDelete("{id}")]
    // public async Task<IActionResult> DeleteUser(long id)
    // {
    //     var user = await _context.Users.FindAsync(id);
    //     if (user == null)
    //     {
    //         return NotFound();
    //     }

    //     _context.Users.Remove(user);
    //     await _context.SaveChangesAsync();
    //     return Ok();
    // }



    
    private readonly UserManagementContext _context;

    public UsersController(UserManagementContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return await _context.Users.ToListAsync();
    }

        [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(long id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        return user;
    }

    [HttpPost]
    public async Task<ActionResult<User>> CreateUser(User user)
    {
        if (_context.Users.Any(u => u.UserName == user.UserName))
        {
            return Conflict("Username already exists.");
        }

        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetUser), new { id = user.UserId }, user);
    }


    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser(long id, User user)
    {
        if (id != user.UserId)
        {
            return BadRequest();
        }

        _context.Entry(user).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(long id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user == null)
        {
            return NotFound();
        }

        _context.Users.Remove(user);
        await _context.SaveChangesAsync();
        return Ok();
    }
}

