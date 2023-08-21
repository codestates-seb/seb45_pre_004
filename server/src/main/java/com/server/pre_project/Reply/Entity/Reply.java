package com.server.pre_project.Reply.Entity;

import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.question.entity.Question;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long replyId;

    @Column(length = 100, nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;  // Question 엔티티의 외래키로 연결

    @ManyToOne
    private Member member;

    @Column(name = "question_id", insertable = false, updatable = false)
    private Long questionId;

    // userId 필드 삭제

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public Long getQuestionId() {
        return questionId;
    }

    public Reply() {
        // 기본 생성자
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

    public Long getReply_id() {
        return replyId;
    }

    // setUserId 메소드 삭제

}