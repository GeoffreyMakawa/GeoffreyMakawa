package com.example.madil.madiluser;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MadilUserRepository
        extends JpaRepository<MadilUser,Long> {
    // @Query(SELECT s FROM Student s WHEREs.email =?1
    Optional<MadilUser> findMadilUserByEmail(String email);
}
