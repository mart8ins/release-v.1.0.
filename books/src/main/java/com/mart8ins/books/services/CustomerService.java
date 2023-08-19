package com.mart8ins.books.services;
import com.mart8ins.books.models.Book;
import com.mart8ins.books.repository.BookRepository;
import com.mart8ins.books.response.BookResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    private BookRepository bookRepository;

    public CustomerService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public BookResponse getPages(Integer pageNumber){
        Page<Book> page = bookRepository.findAll(PageRequest.of(pageNumber, 50, Sort.by(Sort.Direction.DESC, "id")));
        return new BookResponse(page.get().toList(), page.getTotalPages());
    }



}
