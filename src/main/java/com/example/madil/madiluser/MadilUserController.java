package com.example.madil.madiluser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path =  "api/user")
public class MadilUserController {

    private  final  MadilUserService madilUserService;
    @Autowired
    public MadilUserController(MadilUserService madilUserService) {
        this.madilUserService = madilUserService;
    }

    @GetMapping
    public List<MadilUser> getMadilUser(){
        return  madilUserService.getMadilUser();
    }
}
