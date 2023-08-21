package com.server.pre_project.Reply.Controller;

import com.server.pre_project.Reply.Dto.ReplyDto;
import com.server.pre_project.Reply.Entity.Reply;
import com.server.pre_project.Reply.Repository.ReplyRepository;
import com.server.pre_project.question.entity.Question;
import com.server.pre_project.question.repository.QuestionRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
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

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String loggedInUserId = authentication.getName();

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

        // 작성자 ID를 응답에 추가
        ReplyDto responseDto = new ReplyDto();
        responseDto.setReply_id(savedReply.getReply_id());
        responseDto.setAuthorId(loggedInUserId);
        responseDto.setContent(savedReply.getContent());
        responseDto.setCreatedAt(savedReply.getCreatedAt());
        responseDto.setQuestionId(savedReply.getQuestionId());

        return ResponseEntity.status(HttpStatus.CREATED).body(responseDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getReply(@PathVariable int id) {
        Optional<Reply> reply = replyRepository.findById(id);
        return reply.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // 추가적인 API 정의 가능
}