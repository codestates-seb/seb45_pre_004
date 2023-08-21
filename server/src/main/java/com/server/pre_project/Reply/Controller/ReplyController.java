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

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateReply(@PathVariable Long id, @RequestBody ReplyDto replyDto) {
        Optional<Reply> optionalReply = replyRepository.findById(id);
        if (optionalReply.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Reply reply = optionalReply.get();

        // Update the reply content if provided
        if (replyDto.getContent() != null && !replyDto.getContent().trim().isEmpty()) {
            reply.setContent(replyDto.getContent());
        }

        // Update the updatedAt timestamp
        reply.setCreatedAt(LocalDateTime.now());

        // Update the authorId based on the currently logged in user
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String loggedInUserId = authentication.getName();
        reply.setAuthorId(loggedInUserId);

        // Update the questionId from the replyDto
        reply.setQuestionId(replyDto.getQuestionId()); // Assuming you have a setter for questionId in Reply entity

        // Save the updated reply
        Reply updatedReply = replyRepository.save(reply);

        // Prepare the response DTO
        ReplyDto responseDto = new ReplyDto(updatedReply.getAuthorId(), updatedReply.getContent(), updatedReply.getQuestionId());
        responseDto.setReply_id(updatedReply.getReply_id());
        responseDto.setCreatedAt(updatedReply.getCreatedAt());

        return ResponseEntity.ok(responseDto);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReply(@PathVariable Long id) {
        Optional<Reply> optionalReply = replyRepository.findById(id);
        if (optionalReply.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        replyRepository.delete(optionalReply.get());

        return ResponseEntity.noContent().build();
    }

}
