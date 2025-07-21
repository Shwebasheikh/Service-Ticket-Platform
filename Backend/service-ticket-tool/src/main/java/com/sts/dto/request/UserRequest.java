package com.sts.dto.request;

public record UserRequest(String email,
	    String password,
	    String name,
	    String phone,
	    String department,
	    String role )

// Will be mapped to UserRole enum) 
{ }
