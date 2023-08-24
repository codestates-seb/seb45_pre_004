package com.server.pre_project.Reply.Repository;

import com.server.pre_project.Reply.Entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    Reply save(Reply reply);

    Optional<Reply> findById(long id);
    // 추가적인 메서드 정의 가능
}
