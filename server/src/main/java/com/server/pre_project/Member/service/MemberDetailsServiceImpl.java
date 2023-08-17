package com.server.pre_project.Member.service;

import com.server.pre_project.Member.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MemberDetailsServiceImpl implements UserDetailsService {
    private final MemberService memberService;
    @Autowired
    public MemberDetailsServiceImpl(MemberService memberService) {
        this.memberService = memberService;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member member = memberService.findByUsername(username);
        if (member == null) {
            throw new UsernameNotFoundException("다음 username 찾을 수 없습니다 : " + username);
        }
        return new User(member.getId(), member.getPassword(), getAuthorities(member.getRoles()));
    }
    private Collection<? extends GrantedAuthority> getAuthorities(List<String> roles) {
        return roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
    }
}
