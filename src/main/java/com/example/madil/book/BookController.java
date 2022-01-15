package com.example.madil.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/book")
public class BookController {
    private  final BookService bookService;
    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    @GetMapping
    public List<Book> getBook(){
        return bookService.getBook();
    }

    @PostMapping
    public void addNewBook(@RequestBody Book book){
        bookService.addNewBook(book);
    }


    @DeleteMapping(path = "{bookId}")
    public void DeleteUser(@PathVariable("bookId") Long bookId){
        bookService.deleteBook(bookId);
    }

    @PutMapping(path = "{bookId}")
    public  void updateUser(
            @PathVariable("bookId") Long bookId,
            @RequestParam(required = false) String tittle,
            @RequestParam(required = false) String description ){
        bookService.updateUser(bookId,description, tittle);
    }

}
