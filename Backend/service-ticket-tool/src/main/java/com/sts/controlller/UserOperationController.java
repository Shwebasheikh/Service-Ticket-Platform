package com.sts.controlller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sts.dto.request.UserRequest;
import com.sts.dto.response.UserResponce;
import com.sts.entity.User;
import com.sts.service.IUserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class UserOperationController 
{

	/*<<-------------IuserService Object to access All Service Method------------------->>*/
	@Autowired
	private IUserService userService;

	// <<--------------This Method is for testing simple api----------->>

	@GetMapping("/message")
	public ResponseEntity<String> getMessage() 
	{
		System.out.println("UserOperationController.getMessage()");
		return new ResponseEntity<String>("Hello Ajay", HttpStatus.OK);
	}

	
	/*<<----------------------This Method is Take the request and Create a New User--------->>*/
	@PostMapping("/save")
	public ResponseEntity<UserResponce> createUser(@RequestBody UserRequest userRequest) 
	{
		System.out.println("UserOperationController.createUser()");
		UserResponce user = userService.createUser(userRequest);

		if (user.id() > 0)
			return new ResponseEntity<UserResponce>(user, HttpStatus.CREATED);
		else
			return new ResponseEntity<UserResponce>(HttpStatus.BAD_REQUEST);
	}
	
	
	/*<<---------------This Method Return all the users--------->>*/
	
	@GetMapping("/allusers")
	public ResponseEntity<List<UserResponce>> getAllUsers()
	{
		System.out.println("UserOperationController.getAllUsers()");
		
		List<UserResponce> allUsers = userService.getAllUsers();
		
		return new ResponseEntity<List<UserResponce>>(allUsers,HttpStatus.OK);
	}
	
	
	

}
