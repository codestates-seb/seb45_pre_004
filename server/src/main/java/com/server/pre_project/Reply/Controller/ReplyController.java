package com.server.pre_project.Reply.Controller;

import com.server.pre_project.Reply.Dto.ReplyDto;
import com.server.pre_project.Reply.Entity.Reply;
import com.server.pre_project.Reply.Repository.ReplyRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/replies")
public class ReplyController {
    private final ReplyRepository replyRepository;

    public ReplyController(ReplyRepository replyRepository) {
        this.replyRepository = replyRepository;
    }

    @PostMapping
    public ResponseEntity<List<Reply>> createReplies(@RequestBody List<ReplyDto> replyDtos) {
        List<Reply> savedReplies = new ArrayList<>();

        // 댓글 갯수 체크
        if (replyDtos.size() + replyRepository.count() > 5) {
            return ResponseEntity.badRequest().body(savedReplies);
        }

        for (ReplyDto replyDto : replyDtos) {
            if (replyDto.getContent() == null || replyDto.getContent().trim().isEmpty()) {
                return ResponseEntity.badRequest().body(savedReplies);
            }

            Reply reply = new Reply();
            reply.setUserId(replyDto.getUserId());
            reply.setContent(replyDto.getContent());
            reply.setCreatedAt(LocalDateTime.now());

            Reply savedReply = replyRepository.save(reply);
            savedReplies.add(savedReply);
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(savedReplies);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reply> getReply(@PathVariable int id) {
        Optional<Reply> reply = replyRepository.findById(id);
        return reply.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // 추가적인 API 정의 가능
}
