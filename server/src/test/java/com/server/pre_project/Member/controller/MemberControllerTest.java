package com.server.pre_project.Member.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.server.pre_project.Member.service.MemberService;
import com.server.pre_project.Reply.Repository.ReplyRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
class MemberControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    MemberService memberService;

    @MockBean // Add this line
    ReplyRepository replyRepository;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @DisplayName("로그인 성공")
    void login() throws Exception {
        String Id = "erheh";
        String password = "3213asdf";
        mockMvc.perform(post("/api/members/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsBytes(new LoginDto(Id, password))))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("로그인 실패 - Id, 또는 password 불일치")
    void login_fail() throws Exception {
        String Id = "erheh";
        String password = "3213asdf";
        mockMvc.perform(post("/api/members/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsBytes(new LoginDto(Id, password))))
                .andDo(print())
                .andExpect(status().isConflict());

    }
}