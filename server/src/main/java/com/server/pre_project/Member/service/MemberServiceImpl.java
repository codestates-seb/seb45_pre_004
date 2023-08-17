package com.server.pre_project.Member.service;

import com.server.pre_project.Member.dto.MemberDto;
import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.Member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserDetailsService userDetailsService;
    @Autowired
    public MemberServiceImpl(MemberRepository memberRepository, PasswordEncoder passwordEncoder, UserDetailsService userDetailsService) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.userDetailsService = userDetailsService;
    }
    @Override
    public Member create(MemberDto memberDto) {
        Member newMember = new Member();
        newMember.setId(memberDto.getId());
        newMember.setName(memberDto.getName());
        newMember.setPassword(passwordEncoder.encode(memberDto.getPassword()));
        newMember.setRoles(memberDto.getRoles());
        memberRepository.save(newMember);
        return newMember;
    }
    @Override
    public Member getUser(Long id) {
        return memberRepository.findById(id).orElse(null);
    }
    @Override
    public List<Member> getAllUsers() {
        return memberRepository.findAll();
    }
    @Override
    public Member updateUser(Long id, MemberDto memberDto) {
        Member existingMember = getUser(id);
        if (existingMember != null) {
            existingMember.setId(memberDto.getId());
            existingMember.setName(memberDto.getName());
            existingMember.setPassword(passwordEncoder.encode(memberDto.getPassword()));
            existingMember.setRoles(memberDto.getRoles());
            return memberRepository.save(existingMember);
        }
        return null;
    }
    @Override
    public void deleteUser(Long id) {
        memberRepository.deleteById(id);
    }
    @Override
    public Member findByUsername(String username) {
        return memberRepository.findById(username).orElse(null);
    }
}
