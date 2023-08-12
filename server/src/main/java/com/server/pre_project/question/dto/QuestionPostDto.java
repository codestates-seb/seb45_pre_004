package com.server.pre_project.question.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class QuestionPostDto {
    private long questionId;

    @NotBlank(message = "제목을 입력해 주세요")
    @Size(max = 30, message = "제목의 길이는 30자를 넘을 수 없습니다")
    private String title;

    @NotBlank(message = "내용을 입력해 주세요")
    @Size(max = 100, message = "내용은 100자를 넘을 수 없습니다")
    private String content;
}