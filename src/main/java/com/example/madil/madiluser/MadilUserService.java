package com.example.madil.madiluser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
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
    @Transactional
    public void updateUser(Long userId, String fullName, String email) {
        MadilUser madilUser= madilUserRepository.findById(userId).orElseThrow(
                () -> new IllegalStateException(
                        "No user with id "+ userId
                )
        );
        if (fullName != null && fullName.length() >0  &&
                !Objects.equals(madilUser.getPhoneNumber(), fullName)){
            madilUser.setFullName(fullName);
        }

        if (email != null && email.length() >= 0  &&
                !Objects.equals(madilUser.getEmail(), email)){
            Optional<MadilUser> findMadilUserByEmail= madilUserRepository.findMadilUserByEmail(email);

            if (findMadilUserByEmail.isPresent()){
                throw  new IllegalStateException(
                        "email alread taken"
                );

            }
            madilUser.setEmail(email);
        }
    }

    public Optional<MadilUser> getUserByEmail(String email) {
        return madilUserRepository.findMadilUserByEmail(email);
    }
}
