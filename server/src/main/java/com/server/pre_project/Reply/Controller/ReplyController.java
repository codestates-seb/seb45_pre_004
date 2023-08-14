package com.server.pre_project.Reply.Controller;

import com.server.pre_project.Reply.Dto.ReplyDto;
import com.server.pre_project.Reply.Entity.Reply;
import com.server.pre_project.Reply.Repository.ReplyRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/replies")
public class ReplyController {
    private final ReplyRepository replyRepository;

    public ReplyController(ReplyRepository replyRepository) {
        this.replyRepository = replyRepository;
    }

    @PostMapping
    public ResponseEntity<Reply> createReply(@RequestBody ReplyDto replyDto) {
        if (replyDto.getContent() == null || replyDto.getContent().trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        Reply reply = new Reply();  // 클래스명을 단순화한 부분
        reply.setUserId(replyDto.getUserId());
        reply.setContent(replyDto.getContent());
        reply.setCreatedAt(LocalDateTime.now()); // 현재 시간 설정

        Reply savedReply = replyRepository.save(reply);  // 단순화된 클래스명 적용
        return ResponseEntity.status(HttpStatus.CREATED).body(savedReply);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reply> getReply(@PathVariable int id) {
        Optional<Reply> reply = replyRepository.findById(id);
        return reply.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // 추가적인 API 정의 가능
}
