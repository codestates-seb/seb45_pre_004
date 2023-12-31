//package com.server.pre_project.global.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//// CORS 관련
//@Configuration
//public class WebConfig implements WebMvcConfigurer {
//
//    @Bean
//    public WebMvcConfigurer corsConfigurer(){
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry){
//                registry.addMapping("/**")
//                        .allowedOriginPatterns("*")
//                        .allowedHeaders("*")
//                        .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS" , "PATCH")
//                        .exposedHeaders("Authorization", "RefreshToken");
//            }
//        };
//    }
//}
