package com.server.pre_project.question.controller;

import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.Member.repository.MemberRepository;
import com.server.pre_project.question.dto.QuestionPatchDto;
import com.server.pre_project.question.dto.QuestionPostDto;
import com.server.pre_project.question.entity.Question;
import com.server.pre_project.question.page.PaginationInfo;
import com.server.pre_project.question.mapper.QuestionMapper;
import com.server.pre_project.question.page.PaginationResponse;
import com.server.pre_project.question.dto.QuestionResponseDto;
import com.server.pre_project.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;
    @Autowired
    private QuestionMapper questionMapper;
    @Autowired
    MemberRepository memberRepository;

    @PostMapping
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<QuestionResponseDto> createQuestion(
            @RequestBody @Valid QuestionPostDto questionPostDto,
            @RequestParam String userId) {

        Member member = memberRepository.findById(userId).orElse(null);

        if (member == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Question createdQuestion = questionService.createQuestionFromDto(questionPostDto, member);
        QuestionResponseDto responseDto = questionMapper.toResponseDto(createdQuestion);

        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    @GetMapping("/{question_id}")
    public ResponseEntity<QuestionResponseDto> getQuestion(@PathVariable Long question_id){
        Question question = questionService.getQuestionById(question_id);

        if (question != null){
            question.setViewCount(question.getViewCount() + 1);
            questionService.updateQuestion(question_id, question);

            QuestionResponseDto responseDto = questionMapper.toResponseDto(question);

            return ResponseEntity.ok(responseDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<PaginationResponse<Question>> getAllQuestions(
            @Positive @RequestParam int page,
            @Positive @RequestParam int size) {

        Page<Question> pageQuestions = questionService.getAllQuestions(page - 1, size);

        List<Question> questions = pageQuestions.getContent();
        long totalItems = pageQuestions.getTotalElements();
        int totalPages = pageQuestions.getTotalPages();
        boolean hasPrevious = pageQuestions.hasPrevious();
        boolean hasNext = pageQuestions.hasNext();

        PaginationInfo paginationInfo = new PaginationInfo(totalItems, totalPages, page, size, hasPrevious, hasNext);
        PaginationResponse<Question> response = new PaginationResponse<>(questions, paginationInfo);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @PatchMapping("/{question_id}")
    public ResponseEntity<QuestionResponseDto> updateQuestion(@PathVariable Long question_id, @RequestBody Question question) {
        question.setUpdatedAt(new Date());

        // Get the current authenticated user's ID
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String authorId = authentication.getName();

        Question updatedQuestion = questionService.updateQuestion(question_id, question);

        if (updatedQuestion != null) {
            QuestionResponseDto response = new QuestionResponseDto();
            response.setQuestionId(updatedQuestion.getQuestionId());
            response.setTitle(updatedQuestion.getTitle());
            response.setContent(updatedQuestion.getContent());
            response.setCreatedAt(updatedQuestion.getcreatedAt());
            response.setUpdatedAt(updatedQuestion.getUpdatedAt());
            response.setViewCount(updatedQuestion.getViewCount());
            response.setReply_count(updatedQuestion.getReply_count());
            response.setAuthorId(authorId);

            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    @DeleteMapping("/{question_id}")
    public ResponseEntity<Question> deleteQuestion(@PathVariable Long question_id) {
        boolean deleted = questionService.deleteQuestion(question_id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}