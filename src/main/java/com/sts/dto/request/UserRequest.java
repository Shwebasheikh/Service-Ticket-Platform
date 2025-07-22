package com.sts.dto.request;

 import jakarta.validation.constraints.Email;
 import jakarta.validation.constraints.NotBlank;

public record UserRequest(
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email cannot be blank")
    String email,

    @NotBlank(message = "Password cannot be blank")
    String password,

    @NotBlank(message = "Name cannot be blank")
    String name,

    @NotBlank(message = "Phone cannot be blank")
    String phone,

    @NotBlank(message = "Department cannot be blank")
    String department,

    @NotBlank(message = "Role cannot be blank")
    String role
) {}
