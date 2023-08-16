package com.server.pre_project.question.entity;

import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.Reply.Entity.Reply;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

//    @Column(nullable = false)
//    private long userId;

    @Column(nullable = false, length = 30)
    private String title;

    @Column(nullable = false, length = 100)
    private String content;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(updatable = false)
    private Date createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }
    public String getcreatedAt() {
        if (createdAt != null) {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm");
            return dateFormat.format(createdAt);
        }
        return null;
    }

    @Column(name = "view_count")
    private int viewCount = 0;

    @Column(name = "reply_count")
    private int reply_count = 0;

    @OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Reply> replys = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Member member;

}
