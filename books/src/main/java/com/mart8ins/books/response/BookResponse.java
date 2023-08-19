package com.mart8ins.books.response;
import com.mart8ins.books.models.Book;
import lombok.Data;

import java.util.List;


@Data
public class BookResponse {
    private List<Book> books;
    private int pages;

    protected BookResponse() {
    }
    public BookResponse(List<Book> books, int pages) {
        this.books = books;
        this.pages = pages;
    }
}
