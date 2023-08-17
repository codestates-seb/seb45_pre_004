package com.server.pre_project.question.service;

import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.question.dto.QuestionPostDto;
import com.server.pre_project.question.entity.Question;
import com.server.pre_project.question.mapper.QuestionMapper;
import com.server.pre_project.question.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.List;


@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private QuestionMapper questionMapper;

    public Question createQuestionFromDto(QuestionPostDto questionDto, Member member){
        Question question = questionMapper.converToEntity(questionDto);
        question.setMember(member);
        return questionRepository.save(question);
    }

    public Question getQuestionById(Long id) {
        return questionRepository.findById(id).orElse(null);
    }

    public Page<Question> getAllQuestions(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return questionRepository.findAll(pageRequest);
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