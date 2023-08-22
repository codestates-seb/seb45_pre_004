package com.server.pre_project.question.mapper;


import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.Member.repository.MemberRepository;
import com.server.pre_project.question.dto.QuestionPostDto;
import com.server.pre_project.question.dto.QuestionResponseDto;
import com.server.pre_project.question.entity.Question;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class QuestionMapper {

    private final MemberRepository memberRepository;

    @Autowired
    public QuestionMapper(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Question convertToEntity(QuestionPostDto questionPostDto, Member member) {
        if (questionPostDto == null) {
            return null;
        }

        Question question = new Question();
        question.setTitle(questionPostDto.getTitle());
        question.setContent(questionPostDto.getContent());
        question.setMember(member);

        return question;
    }

    public Question convertToEntityFromDto(QuestionPostDto questionPostDto, String userId) {
        Optional<Member> optionalMember = memberRepository.findById(userId);
        Member member = optionalMember.orElse(null);

        return convertToEntity(questionPostDto, member);
    }

    public QuestionResponseDto toResponseDto(Question question) {
        QuestionResponseDto dto = new QuestionResponseDto();
        dto.setQuestionId(question.getQuestionId());
        dto.setTitle(question.getTitle());
        dto.setContent(question.getContent());
        dto.setCreatedAt(question.getcreatedAt());
        dto.setUpdatedAt(question.getUpdatedAt());
        dto.setViewCount(question.getViewCount());
        dto.setReply_count(question.getReply_count());
        dto.setAuthorId(question.getMember().getId());
        return dto;
    }
}