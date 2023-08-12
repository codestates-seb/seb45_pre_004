package com.server.pre_project.question.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionDto {
    private long questionId;
    private String title;
    private String content;

}
