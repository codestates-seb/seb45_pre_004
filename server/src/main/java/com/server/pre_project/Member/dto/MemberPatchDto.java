package com.server.pre_project.Member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
@Getter
@AllArgsConstructor
public class MemberPatchDto {

    @NotBlank(message = "ID는 공백일 수 없습니다.")
    private String id;

    @NotBlank(message = "이름은 공백일 수 없습니다.")
    private String name;

    @NotBlank(message = "비밀번호 공백은 허용하지 않습니다.")
    private String password;
}
