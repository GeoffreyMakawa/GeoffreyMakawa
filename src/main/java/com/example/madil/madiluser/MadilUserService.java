package com.example.madil.madiluser;

import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MadilUserService {
    public List<MadilUser> getMadilUser(){
        return   List.of(
                new MadilUser(
                        1L,
                        "Donnex Thyolera Kamsonga",
                        "Male",
                        "donnex@infi-tech.net",
                        "+265993585213",
                        "demopwd",
                        "admin",
                        "Chikanda",
                        "chanco stars",
                        "03, may 2021"
                )
        );
    }
}
