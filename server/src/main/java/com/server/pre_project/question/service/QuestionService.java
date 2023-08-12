package com.server.pre_project.question.service;

import com.server.pre_project.question.dto.QuestionPostDto;
import com.server.pre_project.question.entity.Question;
import com.server.pre_project.question.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.List;


@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    public Question createQuestionFromDto(@Valid QuestionPostDto questionDto) {
        Question question = new Question();
        question.setQuestionId(questionDto.getQuestionId());
        question.setTitle(questionDto.getTitle());
        question.setContent(questionDto.getContent());

        return questionRepository.save(question);
    }

    public Question getQuestionById(Long id) {
        return questionRepository.findById(id).orElse(null);
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Question updateQuestion(Long id, Question questionPatchDto) {
        Question existingQuestion = questionRepository.findById(id).orElse(null);
        if (existingQuestion != null) {
            if (questionPatchDto.getTitle() != null) {
                existingQuestion.setTitle(questionPatchDto.getTitle());
            }
            if (questionPatchDto.getContent() != null) {
                existingQuestion.setContent(questionPatchDto.getContent());
            }
            return questionRepository.save(existingQuestion);
        } else {
            return null;
        }
    }
    public boolean deleteQuestion(Long id) {
        if (questionRepository.existsById(id)) {
            questionRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}