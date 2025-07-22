package com.sts.service;

import java.util.List;

import com.sts.dto.request.UserRequest;
import com.sts.dto.response.UserResponse;

public interface IUserService {

    UserResponse createUser(UserRequest request);

    List<UserResponse> getAllUsers();

    UserResponse updateUser(Long id, UserRequest request);

    void deleteUser(Long id);
}
