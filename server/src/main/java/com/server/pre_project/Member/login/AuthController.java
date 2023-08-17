package com.server.pre_project.Member.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class AuthController {

    @GetMapping("/login")
    public String showLoginForm(Model model) {
        model.addAttribute("loginForm", new LoginForm());
        return "login"; // 이 부분은 Thymeleaf나 JSP 등의 뷰 템플릿 엔진을 사용하는 경우에 해당하는 뷰 이름입니다.
    }

//    @PostMapping("/login")
//    public String processLogin(@ModelAttribute("loginForm") LoginForm loginForm) {
//        String id = loginForm.getId();
//        String password = loginForm.getPassword();
//
//        // 여기서 Spring Security를 사용하여 인증 처리를 진행하면 됩니다.
//        // 주로 Spring Security의 AuthenticationManager를 사용해서 로그인 처리를 합니다.
//
//        return "redirect:/questions?page=1&size=10"; // 로그인 후 이동할 페이지
//    }
}