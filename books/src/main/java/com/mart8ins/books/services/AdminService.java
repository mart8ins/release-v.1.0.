package com.mart8ins.books.services;

import com.mart8ins.books.models.Book;
import com.mart8ins.books.repository.BookRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class AdminService {

    Logger logger = LoggerFactory.getLogger(AdminService.class);

    private BookRepository bookRepository;

    public AdminService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void save(Book book){
        Optional<Book> foundBook = bookRepository.findByTitle(book.getTitle());
        if(foundBook.isPresent()) {
            logger.info("Cant save book because title already exists in database");
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Book you are trying to add already exists.");
        }
        logger.info("Book saved (Title: " + book.getTitle() + " , Author: " + book.getAuthor());
        bookRepository.save(book);
    }
}
