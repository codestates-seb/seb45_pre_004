package com.server.pre_project.user.mapper;

import com.server.pre_project.user.dto.UserPostDto;

import javax.validation.Valid;
import java.util.List;
/*
@Mapper(componentModel = "spring")
public interface UserMapper {

    default User userPostDtoToUser(UserPostDto userPostDto) {
        User user = new User();

        user.setId(userPostDto.getId());
        user.setName(userPostDto.getName());
        user.setPassword(userPostDto.getPassword());

        return user;
    }

    default UserResponseDto userToUserResponseDto(User user) {

        UserResponseDto userResponseDto = new UserResponseDto();

        userResponseDto.setId(user.getId());
        userResponseDto.setName(user.getName());


        return userResponseDto;
    }

} */