package com.mart8ins.books.controllers;

import com.mart8ins.books.models.Book;
import com.mart8ins.books.services.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdminController {
    AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }


    @ResponseStatus(HttpStatus.CREATED)
    @PutMapping("admin/save")
    public void save(@RequestBody Book book){
        System.out.println(book);
        adminService.save(book);
    }
}
