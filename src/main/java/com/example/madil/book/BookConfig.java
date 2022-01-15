package com.example.madil.book;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class BookConfig {

    @Bean
    CommandLineRunner commandLineRunner(BookRepository bookRepository){
        return args -> {
           Book Donnex = new Book(
                    "Donnex programmer",
                    "details will be here bro",
                    "6th edition",
                    "Donnex Thyoler Kamson",
                    "present"
            );
            Book james = new Book(
                    "james programmer",
                    "details will be here bro",
                    "9th edition",
                    "james Kamson",
                    "present"
            );


            bookRepository.saveAll(
                    List.of(Donnex, james)
            );
        };
    }
}
