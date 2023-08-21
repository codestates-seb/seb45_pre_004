package com.server.pre_project.Reply.Controller;

import com.server.pre_project.Reply.Dto.ReplyDto;
import com.server.pre_project.Reply.Entity.Reply;
import com.server.pre_project.Reply.Repository.ReplyRepository;
import com.server.pre_project.question.entity.Question;
import com.server.pre_project.question.repository.QuestionRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;

import java.util.Optional;

@RestController
@RequestMapping("/api/replies")
public class ReplyController {
    private final ReplyRepository replyRepository;

    private final QuestionRepository questionRepository;

    public ReplyController(ReplyRepository replyRepository, QuestionRepository questionRepository) {
        this.replyRepository = replyRepository;
        this.questionRepository = questionRepository;
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

        // 댓글 객체 생성 및 설정
        Reply reply = new Reply();
        reply.setUserId(replyDto.getUserId());
        reply.setContent(replyDto.getContent());
        reply.setCreatedAt(LocalDateTime.now());

        // 추가: 댓글이 속한 질문의 ID 설정
        reply.setQuestionId(replyDto.getQuestionId());

        // 댓글 저장
        Reply savedReply = replyRepository.save(reply);

        Question question = questionRepository.findById(replyDto.getQuestionId()).orElse(null);
        if (question != null) {
            question.setReply_count(question.getReply_count() + 1);
            questionRepository.save(question);
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(savedReply);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getReply(@PathVariable int id) {
        Optional<Reply> reply = replyRepository.findById(id);
        return reply.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    @PatchMapping("/{id}")
    public ResponseEntity<?> updateReply(@PathVariable int id, @RequestBody ReplyDto replyDto) {
        Optional<Reply> optionalReply = replyRepository.findById(id);
        if (optionalReply.isPresent()) {
            Reply reply = optionalReply.get();

            // replyDto 수정된 내용을 추출하여 reply 객체에 적용
            String updatedContent = replyDto.getContent();
            if (updatedContent != null && !updatedContent.trim().isEmpty()) {
                reply.setContent(updatedContent);
            }

            // 수정된 내용을 저장
            Reply updatedReply = replyRepository.save(reply);
            return ResponseEntity.ok(updatedReply);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReply(@PathVariable int id) {
        Optional<Reply> optionalReply = replyRepository.findById(id);
        if (optionalReply.isPresent()) {
            replyRepository.deleteById((long) id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }



    // 추가적인 API 정의 가능
}

