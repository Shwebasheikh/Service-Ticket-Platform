package com.sts.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sts.dto.request.UserRequest;
import com.sts.dto.response.UserResponse;
import com.sts.entity.User;
import com.sts.enums.UserRole;
import com.sts.exception_handling.UserNotFoundException;
import com.sts.repository.UserRepository;
import com.sts.service.IUserService;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepository;

	/* <<---------------------This Method Create New User--------------------->> */
	@Override
	public UserResponse createUser(UserRequest request) {
		User user = new User();

		user.setEmail(request.email());

		user.setPassword(request.password());

		user.setName(request.name());

		user.setPhone(request.phone());

		user.setDepartment(request.department());

		user.setRole(UserRole.valueOf(request.role()));

		/* <,-----------------Saving User Object to database---------------->>> */

		User savedUser = userRepository.save(user);

		/* <<--------------------Returning UserResponce Object--------------->>> */
		return new UserResponse(savedUser.getId(), savedUser.getEmail(), savedUser.getName(), savedUser.getPhone(),
				savedUser.getDepartment(), savedUser.getRole().name(), savedUser.getCreatedAt(),
				savedUser.getUpdatedAt());

	}

	/* <<------------This Method Return All Users-------------------------->> */
	@Override
	public List<UserResponse> getAllUsers() {

		/* <<--------------------Accessing Data from Database----------->> */
		List<User> allUsers = userRepository.findAll();

		/*
		 * <<------Here We cannot return User data directly that's why we are converting
		 * user data to UserResponce------------>>
		 */

		List<UserResponse> UserList = allUsers.stream()
				.map(user -> new UserResponse(user.getId(), user.getEmail(), user.getName(), user.getPhone(),
						user.getDepartment(), user.getRole().name(), user.getCreatedAt(), user.getUpdatedAt()))
				.collect(Collectors.toList());

		return UserList;
	}

	@Override
	public UserResponse updateUser(Long id, UserRequest request) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new UserNotFoundException("User not found with ID: " + id));

		// Update fields
		user.setEmail(request.email());
		user.setPassword(request.password());
		user.setName(request.name());
		user.setPhone(request.phone());
		user.setDepartment(request.department());
		user.setRole(UserRole.valueOf(request.role().toUpperCase()));

		user.setUpdatedAt(LocalDateTime.now()); // Update the timestamp

		// Save updated user
		User updatedUser = userRepository.save(user);

		// Convert to response DTO
		return new UserResponse(updatedUser.getId(), updatedUser.getEmail(), updatedUser.getName(),
				updatedUser.getPhone(), updatedUser.getDepartment(), updatedUser.getRole().toString(), // ✅ Convert enum
																										// to String
																										// here
				updatedUser.getCreatedAt(), updatedUser.getUpdatedAt());
	}

	// -------delete the use by id---->

	@Override
	public void deleteUser(Long id) {

		User user = userRepository.findById(id)
				.orElseThrow(() -> new UserNotFoundException("User not found with ID: " + id));

		userRepository.delete(user);
	}

}
