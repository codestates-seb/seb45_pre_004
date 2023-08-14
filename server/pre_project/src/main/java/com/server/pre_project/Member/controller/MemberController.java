package com.server.pre_project.Member.controller;


import com.server.pre_project.Member.dto.MemberDto;
import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.Member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping
    public ResponseEntity<Member> createUser(@RequestBody MemberDto memberDto) {
        Member newMember = memberService.saveUser(memberDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMember);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Member> getUser(@PathVariable Long id) {
        Member member = memberService.getUser(id);
        return ResponseEntity.ok(member);
    }

    @GetMapping
    public ResponseEntity<List<Member>> getAllUsers() {
        List<Member> members = memberService.getAllUsers();
        return ResponseEntity.ok(members);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Member> updateUser(@PathVariable Long id, @RequestBody MemberDto memberDto) {
        Member updatedMember = memberService.updateUser(id, memberDto);
        return ResponseEntity.ok(updatedMember);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        memberService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
