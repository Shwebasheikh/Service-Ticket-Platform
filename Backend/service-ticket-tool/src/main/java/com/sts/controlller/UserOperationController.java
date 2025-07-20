package com.sts.controlller;

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
	@Autowired
	private IUserService userService;
	
	/*<<--------------This Method is for testing simple api----------->>*/
	@GetMapping("/message")
	public ResponseEntity<String> getMessage()
	{
		return new ResponseEntity<String>("Hello Ajay",HttpStatus.OK);
	}
	
	
	/*<<----------------------This Method is Take the request and Create a New User--------->>*/
	@PostMapping("/save")
	public ResponseEntity<UserResponce> createUser(@RequestBody UserRequest userRequest)
	{
		UserResponce user = userService.createUser(userRequest);
		
		if(user.id()>0)
			return new ResponseEntity<UserResponce>(user,HttpStatus.OK);
		else
			return new ResponseEntity<UserResponce>(HttpStatus.BAD_REQUEST);
	}
	
}
