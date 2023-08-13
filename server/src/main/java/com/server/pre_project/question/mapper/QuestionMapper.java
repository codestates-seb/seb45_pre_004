package com.server.pre_project.question.mapper;


import com.server.pre_project.question.dto.QuestionPostDto;
import com.server.pre_project.question.entity.Question;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class QuestionMapper {
    public Question converToEntity(QuestionPostDto questionPostDto){
        if (questionPostDto == null){
            return null;
        }

        Question question = new Question();
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());

        return question;
    }
}