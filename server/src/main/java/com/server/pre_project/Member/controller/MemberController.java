package com.server.pre_project.Member.controller;


import com.server.pre_project.Member.dto.MemberDto;
import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.Member.service.MemberService;
import com.server.pre_project.Security.ApiResponse;
import com.server.pre_project.Security.JwtTokenProvider;
import com.server.pre_project.Security.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.FieldError;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;

    @Autowired
    public MemberController(
            MemberService memberService,JwtTokenProvider jwtTokenProvider,AuthenticationManager authenticationManager, UserDetailsService userDetailsService) {
        this.memberService = memberService;
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping
    public ResponseEntity<Member> createUser(@RequestBody MemberDto memberDto) {
        Member newMember = memberService.saveUser(memberDto);

        // 회원가입 성공 시
        UserDetails userDetails = userDetailsService.loadUserByUsername(newMember.getId());

        // "USER" 권한을 가진 사용자에게 토큰 발급
        String token = jwtTokenProvider.createToken(userDetails.getUsername(), Arrays.asList("USER"));

        // Response 생성 및 반환
        ApiResponse response = new ApiResponse(HttpStatus.CREATED.value(), "User registration successful", token);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMember);
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto dto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(dto.getId(), dto.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // 권한 정보를 List<String>으로 변환
        List<String> roles = authentication.getAuthorities().stream()
                .map(Object::toString)
                .collect(Collectors.toList());

        String token = jwtTokenProvider.createToken(dto.getId(), roles);

        return ResponseEntity.ok().body("Bearer " + token);
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
    @ExceptionHandler
    public ResponseEntity handleException(MethodArgumentNotValidException e) {

        final List<FieldError> fieldErrors = e.getBindingResult().getFieldErrors();

        return new ResponseEntity<>(fieldErrors, HttpStatus.BAD_REQUEST);
    }
}