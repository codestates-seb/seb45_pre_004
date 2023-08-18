package com.server.pre_project.Member.controller;


import com.server.pre_project.Member.dto.MemberDto;
import com.server.pre_project.Member.dto.SingleResponseDto;
import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.Member.mapper.MemberMapper;
import com.server.pre_project.Member.service.MemberService;
import com.server.pre_project.auth.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/members")

public class MemberController {
    private final static String MEMBER_DEFAULT_URL = "/members";
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);

        Member createdMember = memberService.createMember(member);
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, createdMember.getUser_id());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{user_id}")
    public ResponseEntity patchMember(
            @PathVariable("user_id") @Positive long user_Id,
            @Valid @RequestBody MemberDto.Patch requestBody) {
        requestBody.setUser_Id(user_Id);

        Member member =
                memberService.updateMember(mapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member)),
                HttpStatus.OK);
    }

    @GetMapping("/{user_id}")
    public ResponseEntity getMember(
            @PathVariable("member-id") @Positive long user_Id) {
        Member member = memberService.findMember(user_Id);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member))
                , HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity getMembers(@Positive @RequestParam int page,
//                                     @Positive @RequestParam int size) {
//        Page<Member> pageMembers = memberService.findMembers(page - 1, size);
//        List<Member> members = pageMembers.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.membersToMemberResponses(members),
//                        pageMembers),
//                HttpStatus.OK);
//    }  *******페이지네이션 관련 내용일듯 *********
    @DeleteMapping("/{user_id}")
    public ResponseEntity deleteMember(
            @PathVariable("user_id") @Positive long user_Id) {
        memberService.deleteMember(user_Id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}