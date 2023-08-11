package com.server.pre_project.user.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UserPostDto {
    @NotBlank
    @Email
    private String email;

    private String password;
}
