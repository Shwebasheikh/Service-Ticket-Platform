package com.sts.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sts.dto.request.UserRequest;
import com.sts.dto.response.UserResponce;
import com.sts.entity.User;
import com.sts.enums.UserRole;
import com.sts.repository.UserRepository;
import com.sts.service.IUserService;

@Service
public class UserServiceImpl implements IUserService
{

	@Autowired
	private UserRepository userRepository;


	/*<<---------------------This Method Create New User--------------------->>*/
	@Override
	public UserResponce createUser(UserRequest request)
	{
		User user=new User();

		user.setEmail(request.email());

		user.setPassword(request.password());

		user.setName(request.name());

		user.setPhone(request.phone());

		user.setDepartment(request.department());

		user.setRole(UserRole.valueOf(request.role()));


		/*<,-----------------Saving User Object to database---------------->>>*/

		User savedUser = userRepository.save(user);


		/*<<--------------------Returning UserResponce Object--------------->>>*/
		return new UserResponce(
	            savedUser.getId(),
	            savedUser.getEmail(),
	            savedUser.getName(),
	            savedUser.getPhone(),
	            savedUser.getDepartment(),
	            savedUser.getRole().name(),
	            savedUser.getCreatedAt(),
	            savedUser.getUpdatedAt()
	     );

	}



	/*<<------------This Method Return All Users-------------------------->>*/
	@Override
	public List<UserResponce> getAllUsers()
	{

		/*<<--------------------Accessing Data from Database----------->>*/
		List<User> allUsers = userRepository.findAll();


		/*<<------Here We cannot return User data directly that's why we are converting user data to UserResponce------------>>*/

		List<UserResponce> UserList = allUsers.stream().map(user -> new UserResponce(
                user.getId(),
                user.getEmail(),
                user.getName(),
                user.getPhone(),
                user.getDepartment(),
                user.getRole().name(),
                user.getCreatedAt(),
                user.getUpdatedAt()
            ))
            .collect(Collectors.toList());

		return UserList;
	}

}
