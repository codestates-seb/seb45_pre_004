package com.server.pre_project.Reply.Dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

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

    public ReplyDto(String authorId, String content, Long questionId) {
        this.authorId = authorId;
        this.content = content;
        this.questionId = questionId;
    }


    public String getCreatedAt() {
        if (createdAt != null) {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm");
            dateFormat.setTimeZone(TimeZone.getTimeZone("Asia/Seoul"));
            return dateFormat.format(Date.from(createdAt.atZone(ZoneId.of("Asia/Seoul")).toInstant()));
        }
        return null;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}