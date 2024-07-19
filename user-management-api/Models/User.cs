using System;
using System.Collections.Generic;

namespace UserManagementApi.Models;

public partial class User
{
    public long UserId { get; set; }

    public string? UserName { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Email { get; set; }

    public string? UserStatus { get; set; }

    public string? Department { get; set; }
}

