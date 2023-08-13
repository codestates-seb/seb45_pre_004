package com.server.pre_project.user.service;

import com.server.pre_project.user.entity.User;
import com.server.pre_project.user.repository.UserRepository;
import org.springframework.stereotype.Service;


import java.util.Optional;
/*
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){

        this.userRepository = userRepository;
    }

    public User getLoginUser(){ //로그인된 유저가 옳바른 지 확인하고 정보 가져옴
        return findUser(getUserByToken());
    }

    private User findUser(User user){// 아래 getUserByToken 쓸거임
        return findVerifiedUser(user.getUserId());
    }

    public User findVerifiedUser(long userId){
        Optional<User> optionalUser = userRepository.findById(userId);

        return findUser;
    }

    public User createUser(User user) {
        verifyExistsEmail(user.Id());


        return userRepository.save(user);
    }

    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }

    public User getUserByToken(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        PrincipalDetails principalDetails = (PrincipalDetails)principal;

        return principalDetails.getUser();
    }
} */