package com.example.madil;

import com.example.madil.madiluser.MadilUser;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
public class MadilApplication {

	public static void main(String[] args) {
		SpringApplication.run(MadilApplication.class, args);
	}
	@GetMapping
	public List<MadilUser> testing(){
		return List.of(
				new MadilUser(
						1L,
						"Donnex Thyolera Kamsonga",
						"Male",
						"donnex@infi-tech.net",
						"+265993585213",
						"hello f",
						"admin",
						"Chikanda",
						"jams",
						"09, May 2021"
				)
		);
	}
}
