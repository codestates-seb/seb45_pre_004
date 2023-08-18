package com.server.pre_project.Security;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ApiResponse {
    private int status;
    private String message;
    private String token;


    public ApiResponse(int status, String message, String token) {
        this.status = status;
        this.message = message;
        this.token = token;
    }
}