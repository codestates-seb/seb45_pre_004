package com.server.pre_project.auth;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.stream.Collectors;

public class MemberAuthority {
    private final List<String> USER_ROLES_SRTING = List.of("USER");
    public List<GrantedAuthority> createAuthorities(List<String> roles){

        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
    }

    public List<String> createRoles(){
        return USER_ROLES_SRTING;
    }

}