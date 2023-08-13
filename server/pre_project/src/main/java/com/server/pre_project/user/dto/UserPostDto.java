package com.server.pre_project.user.dto;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import net.bytebuddy.implementation.bind.annotation.Empty;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


@Getter
@AllArgsConstructor
public class UserPostDto {

    @NotBlank(message = "ID는 공백일 수 없습니다.")
    private String id;

    @NotBlank(message = "이름은 공백일 수 없습니다.")
    private String name;

    @Size(message = "password의 길이는 최소 6글자 이상, 같은 글자 연속 사용 및 공백은 허용하지 않습니다.")
    private String password;

}