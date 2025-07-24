package com.sts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sts.dto.request.UserRequest;
import com.sts.dto.response.UserResponse;
import com.sts.service.IUserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
// @CrossOrigin(origins = "http://localhost:8080/")
public class UserOperationController {

	/*
	 * <<------------- IUserService Object to access All Service Methods
	 * ------------------->>
	 */
	@Autowired
	private IUserService userService;

	// <<--------------This Method is for testing simple API ----------->>
	@GetMapping("/message")
	public ResponseEntity<String> getMessage() {
		System.out.println("UserOperationController.getMessage()");
		return new ResponseEntity<>("Hello Ajay", HttpStatus.OK);
	}

	/*
	 * <<---------------------- This Method Takes the request and Creates a New User
	 * --------->>
	 */
	@PostMapping("/save")
	public ResponseEntity<UserResponse> createUser(@RequestBody @Valid UserRequest userRequest) {
		System.out.println("UserOperationController.createUser()");
		UserResponse user = userService.createUser(userRequest);

		if (user.id() > 0)
			return new ResponseEntity<>(user, HttpStatus.CREATED);
		else
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}

	/* <<--------------- This Method Returns all the users --------->> */
	@GetMapping("/allusers")
	public ResponseEntity<List<UserResponse>> getAllUsers() {
		System.out.println("UserOperationController.getAllUsers()");
		List<UserResponse> allUsers = userService.getAllUsers();
		return new ResponseEntity<>(allUsers, HttpStatus.OK);
	}

	// <<------------------ Update user ------------------>>
	@PutMapping("/users/{id}")
	public ResponseEntity<UserResponse> updateUser(@PathVariable("id") Long id,
			@RequestBody @Valid UserRequest request) {
		UserResponse updatedUser = userService.updateUser(id, request);
		return ResponseEntity.ok(updatedUser);
	}
	// <<------------------ Delete user ------------------>>

	@DeleteMapping("/users/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable(name = "id") Long id) {
	    userService.deleteUser(id);
	    return ResponseEntity.ok("User deleted successfully with ID: " + id);
	}


}
