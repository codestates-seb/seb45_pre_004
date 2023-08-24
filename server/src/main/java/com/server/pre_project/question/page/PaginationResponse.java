package com.server.pre_project.question.page;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PaginationResponse<T> {
    private List<T> content;
    private PaginationInfo paginationInfo;

    public PaginationResponse(List<T> content, PaginationInfo paginationInfo) {
        this.content = content;
        this.paginationInfo = paginationInfo;
    }
}