package com.server.pre_project.Member.repository;

import com.server.pre_project.Member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Member save(Member member);
    Optional<Member> findById(String id);

}