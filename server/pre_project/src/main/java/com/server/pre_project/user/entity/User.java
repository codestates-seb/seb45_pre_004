package com.server.pre_project.user.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, unique = true , updatable = false)
    private String email;

    @Column(nullable = false, unique = true)
    private String password;


    /*
    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private UserStatus userStatus = UserStatus.USER.ACTIVE;

    유저 현재 상태 관련 확인 필요
     */


    public User(String name, String email, String password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    /*public enum UserStatus{
        USER_ACTiVE("활동중"),
        USER_SLEEP("휴면 상태"),
        USER_QUIT("탈퇴 상태");

        @Getter
        private Stirng status;

        UserStatus(String status){
            this.status = status;
        }
    }

     */

}
