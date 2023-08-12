package com.server.pre_project.question.controller;

import com.server.pre_project.question.dto.QuestionPostDto;
import com.server.pre_project.question.entity.Question;
import com.server.pre_project.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping
    public ResponseEntity<Question> createQuestion(@RequestBody @Valid QuestionPostDto questionPostDto){
        Question createdQuestion = questionService.createQuestionFromDto(questionPostDto);
        return new ResponseEntity<>(createdQuestion, HttpStatus.CREATED);
    }

    @GetMapping("/{question_id}")
    public ResponseEntity<Question> getQuestion(@PathVariable Long question_id){
        Question question = questionService.getQuestionById(question_id);
        if (question != null){
            question.setViewCount(question.getViewCount() + 1);
            questionService.updateQuestion(question_id, question);
            return new ResponseEntity<>(question, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping
    public ResponseEntity<List<Question>> getAllQuestions(){
        List<Question> questions = questionService.getAllQuestions();
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }

    @PatchMapping("/{question_id}")
    public ResponseEntity<Question> updateQuestion(@PathVariable Long question_id, @RequestBody Question question){
        Question updateQuestion = questionService.updateQuestion(question_id, question);
        if(updateQuestion != null){
            return new ResponseEntity<>(updateQuestion, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{question_id}")
    public ResponseEntity<Question> deleteQuetion(@PathVariable Long question_id) {
        boolean deleted = questionService.deleteQuestion(question_id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}