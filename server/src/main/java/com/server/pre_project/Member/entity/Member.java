package com.server.pre_project.Member.entity;


import com.server.pre_project.Reply.Entity.Reply;
import com.server.pre_project.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @Column(nullable = false, updatable = false)
    private String id;

    @Column(nullable = false, length = 30)
    private String name;

    @Column(nullable = false)
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();


    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    private List<Reply> replys = new ArrayList<>();


    @Getter
    //권한 관리: 관리자와 일반멤버
    public enum UserRole {
        ADMIN("ROLE_ADMIN"),
        MEMBER("ROLE_MEMBER");

        UserRole(String value) {
            this.value = value;
        }

        private String value;
    }

}