package com.server.pre_project.Member.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
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


    @OneToMany(mappedBy = "Member", cascade = CascadeType.PERSIST)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "Member", cascade = CascadeType.PERSIST)
    private List<reply> answers = new ArrayList<>();

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

