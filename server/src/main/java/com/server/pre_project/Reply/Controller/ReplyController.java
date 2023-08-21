package com.server.pre_project.Reply.Controller;

import com.server.pre_project.Reply.Dto.ReplyDto;
import com.server.pre_project.Reply.Entity.Reply;
import com.server.pre_project.Reply.Repository.ReplyRepository;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@Getter
@RequestMapping("/api/replies")
public class ReplyController {
    private final ReplyRepository replyRepository;

    public ReplyController(ReplyRepository replyRepository) {
        this.replyRepository = replyRepository;
    }

    @PostMapping
    public ResponseEntity<?> createReply(@RequestBody ReplyDto replyDto) {
        if (replyDto.getContent() == null || replyDto.getContent().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("댓글 내용이 비어있습니다.");
        }

        // 각 게시글당 최대 댓글 개수 체크
        int totalReplies = (int) replyRepository.count();
        if (totalReplies >= 5) {
            return ResponseEntity.badRequest().body("댓글 개수가 초과되었습니다.");
        }

        Reply reply = new Reply();
        reply.setUserId(replyDto.getUserId());
        reply.setContent(replyDto.getContent());
        reply.setCreatedAt(LocalDateTime.now());

        Reply savedReply = replyRepository.save(reply);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedReply);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getReply(@PathVariable int id) {
        Optional<Reply> reply = replyRepository.findById(id);
        return reply.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // 추가적인 API 정의 가능
}

