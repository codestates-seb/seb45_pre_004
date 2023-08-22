package com.server.pre_project.Member.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.server.pre_project.Reply.Entity.Reply;
import com.server.pre_project.question.entity.Question;
import lombok.*;

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

    @Column(nullable = false, unique = true, updatable = false)
    private String id;

    @Column(nullable = false, length = 30)
    private String name;

    @Column(nullable = false)
    private String password;


    @JsonIgnore
    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    private List<Reply> replys = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();


}