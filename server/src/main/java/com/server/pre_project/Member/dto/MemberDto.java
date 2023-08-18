package com.server.pre_project.Member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank private String id;

        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String name;

        @NotBlank
        private String password;

    }
    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long user_Id;

        @NotBlank(message = "회원 이름은 공백이 아니어야 합니다")
        private String name;

        public void setUser_Id(long user_Id) {
            this.user_Id = user_Id;
        }
    }
    @AllArgsConstructor
    @Getter
    public static class Response {
        private long user_Id;
        private String id;
        private String name;

    }
}