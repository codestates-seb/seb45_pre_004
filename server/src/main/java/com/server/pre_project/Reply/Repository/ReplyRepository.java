package com.server.pre_project.Reply.Repository;

import com.server.pre_project.Reply.Entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReplyRepository extends JpaRepository<Reply, Integer> {
    Reply save(Reply reply);

    Optional<Reply> findById(int id);
    // 추가적인 메서드 정의 가능
}
