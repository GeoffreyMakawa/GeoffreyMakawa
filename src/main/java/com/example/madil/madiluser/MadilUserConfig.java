package com.example.madil.madiluser;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class MadilUserConfig {
    @Bean
    CommandLineRunner commandLineRunner(MadilUserRepository madilUserRepository){
        return args -> {
           MadilUser Donnex =  new MadilUser(
                   "Donnex Thyolera Kamsonga",
                   "Male",
                   "donnex@infi-tech.net",
                   "+265993585213",
                   "demopwd",
                   "admin",
                   "Chikanda",
                   "chanco stars",
                   "03, may 2021"
           );

            MadilUser Geoffrey =  new MadilUser(
                    "Geoffrey Makawa",
                    "Male",
                    "Geoffrey@infi-tech.net",
                    "+265993585213",
                    "demopwd",
                    "admin",
                    "Chikanda",
                    "chanco stars",
                    "03, may 2021"
            );
            madilUserRepository.saveAll(
                    List.of(Donnex, Geoffrey)
            );
        };
    }
}
