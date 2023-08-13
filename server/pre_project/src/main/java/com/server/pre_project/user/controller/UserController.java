package com.server.pre_project.user.controller;


import com.server.pre_project.user.dto.UserDto;
import com.server.pre_project.user.entity.Member;
import com.server.pre_project.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<Member> createUser(@RequestBody UserDto userDto) {
        Member newMember = userService.saveUser(userDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMember);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Member> getUser(@PathVariable Long id) {
        Member member = userService.getUser(id);
        return ResponseEntity.ok(member);
    }

    @GetMapping
    public ResponseEntity<List<Member>> getAllUsers() {
        List<Member> members = userService.getAllUsers();
        return ResponseEntity.ok(members);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Member> updateUser(@PathVariable Long id, @RequestBody UserDto userDto) {
        Member updatedMember = userService.updateUser(id, userDto);
        return ResponseEntity.ok(updatedMember);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
