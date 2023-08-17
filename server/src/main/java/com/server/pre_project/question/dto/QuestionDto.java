package com.server.pre_project.question.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionDto {
    private long questionId;
    private long userId;
    private String title;
    private String content;
}