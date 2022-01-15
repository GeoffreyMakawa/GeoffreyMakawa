package com.example.madil.book;

import javax.persistence.*;

@Entity
@Table
public class Book {
    @Id
    @SequenceGenerator(
            name = "Book_sequence",
            sequenceName = "Book_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy =  GenerationType.SEQUENCE,
            generator = "Book_sequence"
    )
    private Long id;
    private String tittle;
    private String description;
    private String edition;
    private String auther;
    private String status;

    public Book() {
    }

    public Book(Long id, String tittle, String description, String edition, String auther, String status) {
        this.id = id;
        this.tittle = tittle;
        this.description = description;
        this.edition = edition;
        this.auther = auther;
        this.status = status;
    }

    public Book(String tittle, String description, String edition, String auther, String status) {
        this.tittle = tittle;
        this.description = description;
        this.edition = edition;
        this.auther = auther;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTittle() {
        return tittle;
    }

    public void setTittle(String tittle) {
        this.tittle = tittle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEdition() {
        return edition;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    public String getAuther() {
        return auther;
    }

    public void setAuther(String auther) {
        this.auther = auther;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", tittle='" + tittle + '\'' +
                ", description='" + description + '\'' +
                ", edition='" + edition + '\'' +
                ", auther='" + auther + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
