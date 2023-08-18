package com.mart8ins.books.controllers;

import com.mart8ins.books.response.BookResponse;
import com.mart8ins.books.services.CustomerService;
import org.springframework.web.bind.annotation.*;

@RestController
public class CustomerController {

    CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("")
    public BookResponse getInitialPage(@RequestParam Integer page){
        return customerService.getPages(page);
    }



}
