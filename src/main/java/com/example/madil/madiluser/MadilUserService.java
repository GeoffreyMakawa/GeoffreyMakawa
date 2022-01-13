package com.example.madil.madiluser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MadilUserService {

    private final MadilUserRepository madilUserRepository;

    @Autowired
    public MadilUserService(MadilUserRepository madilUserRepository) {
        this.madilUserRepository = madilUserRepository;
    }

    public List<MadilUser> getMadilUser(){
        return madilUserRepository.findAll();
    }

    public void addUser(MadilUser madilUser) {
       Optional<MadilUser> findMadilUserByEmail=  madilUserRepository.findMadilUserByEmail(madilUser.getEmail());
       if (findMadilUserByEmail.isPresent()){
           throw new IllegalStateException(
                   "Email taken "
           );
       }
        madilUserRepository.save(madilUser);

    }

    public void deleteUser(Long id) {
       boolean idExists = madilUserRepository.existsById(id);
       if (!idExists){
           throw new IllegalStateException(
                   "User with id " + id +" does not exists"
           );

       }
        madilUserRepository.deleteById(id);
    }
}
