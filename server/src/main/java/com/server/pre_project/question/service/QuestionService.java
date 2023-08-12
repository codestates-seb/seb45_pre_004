package com.server.pre_project.question.service;

import com.server.pre_project.question.entity.Question;
import com.server.pre_project.question.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question getQuestionById(Long id) {
        return questionRepository.findById(id).orElse(null);
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Question updateQuestion(Long id, Question updatedQuestion) {
        Question existingQuestion = questionRepository.findById(id).orElse(null);
        if (existingQuestion != null) {
            if (updatedQuestion.getTitle() != null) {
                existingQuestion.setTitle(updatedQuestion.getTitle());
            }
            if (updatedQuestion.getContent() != null) {
                existingQuestion.setContent(updatedQuestion.getContent());
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