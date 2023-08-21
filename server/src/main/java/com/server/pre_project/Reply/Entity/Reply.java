package com.server.pre_project.Reply.Entity;

import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.question.entity.Question;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long replyId;  // 수정: reply_id -> replyId

    @Column(nullable = false)
    private Long userId;  // 수정: String -> Long

    @Column(length = 100, nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    private Member member;

    @Transient  // 수정: questionId를 DB에 저장하지 않음
    private Long questionId;

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public Long getQuestionId() {
        return questionId;
    }

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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
