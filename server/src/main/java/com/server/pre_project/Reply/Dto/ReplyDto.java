package com.server.pre_project.Reply.Dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ReplyDto {
    private Long reply_id;
    private String authorId;
    private String content;
    private LocalDateTime createdAt;
    private Long questionId;

    public ReplyDto() {
        // 기본 생성자
    }

    public ReplyDto(String authorId, String content) {
        this.authorId = authorId;
        this.content = content;
    }

    // authorId 관련 메소드 추가
    public String getAuthorId() {
        return authorId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }
}