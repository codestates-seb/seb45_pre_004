package com.server.pre_project.question.page;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaginationInfo {
    private long totalItems;
    private int totalPages;
    private int currentPage;
    private int pageSize;
    private boolean hasPreviousPage;
    private boolean hasNextPage;

    public PaginationInfo(long totalItems, int totalPages, int currentPage, int pageSize, boolean hasPreviousPage, boolean hasNextPage) {
        this.totalItems = totalItems;
        this.totalPages = totalPages;
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.hasPreviousPage = hasPreviousPage;
        this.hasNextPage = hasNextPage;
    }

}