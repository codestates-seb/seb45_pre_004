package com.server.pre_project.user.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;


@Getter
@Data
public class UserPostDto {

    @NotBlank(message = "ID는 공백일 수 없습니다.")
    private String id;

    @NotBlank(message = "이름은 공백일 수 없습니다.")
    private long name;

    @Pattern(regexp = "^(?!.*(.)\1{1})(?!.*\s).{6,}$",
            message = "password의 길이는 최소 6글자 이상, 같은 글자 연속 사용 및 공백은 허용하지 않습니다.")
    private String password;

}