package com.example.madil.book;

import com.example.madil.madiluser.MadilUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class BookService {
    private  final BookRepository bookRepository;
    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getBook(){
        return  bookRepository.findAll();
    }

    public void addNewBook(Book book) {
        Optional<Book> findBookByTittle=  bookRepository.findBookByTittle(book.getTittle());
        if (findBookByTittle.isPresent()){
            throw new IllegalStateException(
                    "Book Tittle arleady taken "
            );
        }
        bookRepository.save(book);
    }

    public void deleteBook(Long bookId) {
        boolean idExists = bookRepository.existsById(bookId);
        if (!idExists){
            throw new IllegalStateException(
                    "User with id " + bookId +" does not exists"
            );

        }
        bookRepository.deleteById(bookId);
    }

    @Transactional
    public void updateUser(Long bookId, String tittle, String description) {
        Book book= bookRepository.findById(bookId).orElseThrow(
                () -> new IllegalStateException(
                        "No user with id "+ bookId
                )
        );
        if (description != null && description.length()> 13  &&
                !Objects.equals(book.getDescription(), description)){
            book.setDescription(description);
        }

        if (tittle != null && tittle.length() >= 0  &&
                !Objects.equals(book.getTittle(), tittle)){
            Optional<Book> findBookByTittle= bookRepository.findBookByTittle(tittle);

            if (findBookByTittle.isPresent()){
                throw  new IllegalStateException(
                        "tittle alread taken"
                );

            }
            book.setTittle(tittle);
        }
    }
}
