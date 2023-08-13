package com.server.pre_project.user.dto;

import com.server.pre_project.user.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto {
    private long user_Id;
    private String id;
    private String name;
}