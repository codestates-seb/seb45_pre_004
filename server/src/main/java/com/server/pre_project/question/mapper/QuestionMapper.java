package com.server.pre_project.question.mapper;


import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.Member.repository.MemberRepository;
import com.server.pre_project.question.dto.QuestionPostDto;
import com.server.pre_project.question.entity.Question;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class QuestionMapper {
    public Question converToEntity(QuestionPostDto questionPostDto){
        if (questionPostDto == null){
            return null;
        }

        Question question = new Question();
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());

//        Optional<Member> memberOptional = MemberRepository.findByUserId(questionPostDto.getUserId());
//        if (memberOptional.isPresent()) {
//            Member member = memberOptional.get();
//            question.setMember(member);
//            member.getQuestions().add(question); // 이 부분은 member의 questions 리스트에 해당 question을 추가하는 부분입니다.
//        }

        return question;

    }
}