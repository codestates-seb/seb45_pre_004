package com.server.pre_project.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class AuthenticationConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .httpBasic().disable()
                .csrf().disable()
                .cors().and()
                .authorizeRequests()
                .antMatchers("/api/members").permitAll()//member post 항상 가능
                .antMatchers("/api/members/login").permitAll()//login은 항상 가능
                .antMatchers(HttpMethod.POST,"/**").authenticated()//모든 포스트 요청 막기
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)////jwt사용하는경우
                .and()
//                .addFilterBefore(new JwtTokenFilter(memberservice, secretKey)),UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}