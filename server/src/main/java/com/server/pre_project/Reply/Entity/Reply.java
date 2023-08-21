package com.server.pre_project.Reply.Entity;

import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.question.entity.Question;
import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

@Entity
@Getter
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private Long userId;

    @Column(length = 100, nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;  // Question 엔티티의 외래키로 연결

    @ManyToOne
    private Member member;

    public Reply() {
        // 기본 생성자
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getCreatedAt() {
        if (createdAt != null) {
            LocalDateTime localDateTime = createdAt.atZone(ZoneId.of("Asia/Seoul")).toLocalDateTime();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm");
            return localDateTime.format(formatter);
        }
        return null;
    }
}
