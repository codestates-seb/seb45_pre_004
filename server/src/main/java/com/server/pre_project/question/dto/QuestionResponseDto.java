package com.server.pre_project.question.dto;

import com.server.pre_project.Reply.Entity.Reply;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {
    private Long questionId;
    private String title;
    private String content;
    private String createdAt;
    private String updatedAt;
    private int viewCount;
    private int reply_count;
    private List<Reply> replies;
    private String authorId;

}