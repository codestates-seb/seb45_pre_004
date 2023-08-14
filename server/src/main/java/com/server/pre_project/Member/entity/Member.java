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

    @Column(nullable = false, unique = true, updatable = false)
    private String id;

    @Column(nullable = false, length = 30)
    private String name;

    @Column(nullable = false, unique = true)
    private String password;


    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    private List<Reply> replys = new ArrayList<>();

}
   /* public enum UserStatus{
        USER_ACTiVE("활동중"),
        USER_SLEEP("휴면 상태"),safsadfasfsdfadsfgi
        USER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        UserStatus(String status){
            this.status = status;
        }
    }
    */

