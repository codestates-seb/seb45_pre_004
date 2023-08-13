package com.server.pre_project.user.repository;

import com.server.pre_project.user.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<Member, Long> {
    Member save(Member member);
    Optional<Member> findById(String id);

}