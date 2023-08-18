package com.server.pre_project.Member.service;


import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.Member.repository.MemberRepository;
import com.server.pre_project.auth.utils.CustomAuthorityUtils;
import com.server.pre_project.exception.BusinessLogicException;
import com.server.pre_project.exception.ExceptionCode;
import com.server.pre_project.helper.MemberRegistrationApplicationEvent;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final ApplicationEventPublisher publisher;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;


    public MemberService(MemberRepository memberRepository,
                         ApplicationEventPublisher publisher,
                         PasswordEncoder passwordEncoder,
                         CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.publisher = publisher;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }
    public Member createMember(Member member) {
        verifyExistsId(member.getId());
        //Password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        // DB에 User Role 저장
        List<String> roles = authorityUtils.createRoles(member.getId());
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);
        publisher.publishEvent(new MemberRegistrationApplicationEvent(savedMember));
        return savedMember;
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getUser_id());

        Optional.ofNullable(member.getName())
                .ifPresent(name -> findMember.setName(name));
        return memberRepository.save(findMember);
    }

    @Transactional(readOnly = true)
    public Member findMember(long user_id) {
        return findVerifiedMember(user_id);
    }
//    public Page<Member> findMembers(int page, int size) {
//        return memberRepository.findAll(PageRequest.of(page, size,
//                Sort.by("user_id").descending()));
//    }
    public void deleteMember(long user_id) {
        Member findMember = findVerifiedMember(user_id);

        memberRepository.delete(findMember);
    }
    @Transactional(readOnly = true)
    public Member findVerifiedMember(long user_id) {
        Optional<Member> optionalMember =
                memberRepository.findById(user_id);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }
    private void verifyExistsId(String id) {
        Optional<Member> member = memberRepository.findById(id);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}