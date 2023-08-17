package com.server.pre_project.Member.service;

import com.server.pre_project.Member.dto.MemberDto;
import com.server.pre_project.Member.entity.Member;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface MemberService {
    Member create(MemberDto memberDto);
    Member getUser(Long id);
    List<Member> getAllUsers();
    Member updateUser(Long id, MemberDto memberDto);
    void deleteUser(Long id);
    Member findByUsername(String username);
}
