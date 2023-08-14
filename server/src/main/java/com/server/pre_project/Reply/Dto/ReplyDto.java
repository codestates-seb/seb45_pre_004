package com.server.pre_project.Reply.Dto;

import java.time.LocalDateTime;

public class ReplyDto {
    private Long id;  // id 필드 추가
    private Long userId;
    private String content;
    private LocalDateTime createdAt;

    public ReplyDto() {
        // 기본 생성자
    }

    public ReplyDto(Long userId, String content) {
        this.userId = userId;
        this.content = content;
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        // 댓글 내용이 없으면 예외를 던지도록 처리
        if (content == null || content.trim().isEmpty()) {
            throw new IllegalArgumentException("댓글 내용은 필수입니다.");
        }
        this.content = content;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
