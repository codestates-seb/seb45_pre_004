package com.server.pre_project.user.service;

import com.server.pre_project.user.dto.UserDto;
import com.server.pre_project.user.entity.Member;
import com.server.pre_project.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Member saveUser(UserDto userDto) {
        Member newMember = new Member();
        newMember.setName(userDto.getName());
        newMember.setId(userDto.getId());
        newMember.setPassword(userDto.getPassword());
        return userRepository.save(newMember);
    }

    public Member updateUser(Long userId, UserDto userDto) {
        Member member = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        member.setName(userDto.getName());
        member.setId(userDto.getId());
        member.setPassword(userDto.getPassword());

        return userRepository.save(member);
    }

    public Member getUser(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
    }

    public List<Member> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
