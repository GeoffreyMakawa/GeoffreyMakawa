package com.example.madil.madiluser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public  void addNewUser(@RequestBody MadilUser madilUser){
        madilUserService.addUser(madilUser);
    }

    @DeleteMapping(path = "{userId}")
    public void DeleteUser(@PathVariable("userId") Long userId){
        madilUserService.deleteUser(userId);
    }

    @PutMapping(path = "{userId}")
    public  void updateUser(
            @PathVariable("userId") Long userId,
            @RequestParam(required = false) String fullName,
            @RequestParam(required = false) String email ){
        madilUserService.updateUser(userId,fullName, email);
    }

}
