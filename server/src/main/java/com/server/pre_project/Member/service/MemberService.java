package com.server.pre_project.Member.service;

import com.server.pre_project.Member.dto.MemberDto;
import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.Member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



import java.util.List;



@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;


    public boolean login(String id, String password) {
        Member member = memberRepository.findById(id)
                .orElse(null);

        if (member == null) {
            return false; // 멤버가 없는 경우 로그인 실패
        }

        if (password.equals(member.getPassword())) {
            return true; // 로그인 성공
        }

        return false; // 비밀번호 불일치로 로그인 실패
    }

    @Autowired
    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Member saveUser(MemberDto memberDto) {
        Member newMember = new Member();
        newMember.setName(memberDto.getName());
        newMember.setId(memberDto.getId());
        String encodedPassword = passwordEncoder.encode(memberDto.getPassword());
        newMember.setPassword(encodedPassword);
        return memberRepository.save(newMember);
    }

    public Member updateUser(Long userId, MemberDto memberDto) {
        Member member = memberRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        member.setName(memberDto.getName());
        member.setId(memberDto.getId());
        String encodedPassword = passwordEncoder.encode(memberDto.getPassword());
        member.setPassword(encodedPassword);

        return memberRepository.save(member);
    }

    public Member getUser(Long userId) {
        return memberRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
    }

    public List<Member> getAllUsers() {
        return memberRepository.findAll();
    }

    public void deleteUser(Long userId) {
        memberRepository.deleteById(userId);
    }
}
