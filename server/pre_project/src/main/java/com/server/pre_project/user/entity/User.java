package com.server.pre_project.user.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity

public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, unique = true , updatable = false)
    private String email;

    @Column(nullable = false, unique = true)
    private String password;


    @ElementCollection(fetch = FetchType.EAGER) /* elementCollection 추가 */
    private List<String> roles = new ArrayList<>();

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private UserStatus userStatus;




    public User(String name, String email, String password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    /*
    추후 매핑 예정
    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<reply> answers = new ArrayList<>();

     */

    public enum UserStatus{
        USER_ACTiVE("활동중"),
        USER_SLEEP("휴면 상태"),
        USER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        UserStatus(String status){
            this.status = status;
        }
    }

}
