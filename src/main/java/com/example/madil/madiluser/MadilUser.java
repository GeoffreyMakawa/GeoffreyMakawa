package com.example.madil.madiluser;

public class MadilUser {
    private  Long id;
    private  String fullName;
    private String gender;
    private String email;
    private String phoneNumber;
    private String pwd;
    private String type;
    private String location;
    private  String bookName;
    private String dateBorrowed;

    public MadilUser() {
    }

    public MadilUser(Long id, String fullName, String gender, String email, String phoneNumber,
                     String pwd, String type, String location, String bookName, String dateBorrowed) {
        this.id = id;
        this.fullName = fullName;
        this.gender = gender;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.pwd = pwd;
        this.type = type;
        this.location = location;
        this.bookName = bookName;
        this.dateBorrowed = dateBorrowed;
    }

    public MadilUser(String fullName, String gender, String email,
                     String phoneNumber, String pwd, String type,
                     String location, String bookName, String dateBorrowed) {
        this.fullName = fullName;
        this.gender = gender;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.pwd = pwd;
        this.type = type;
        this.location = location;
        this.bookName = bookName;
        this.dateBorrowed = dateBorrowed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getDateBorrowed() {
        return dateBorrowed;
    }

    public void setDateBorrowed(String dateBorrowed) {
        this.dateBorrowed = dateBorrowed;
    }

    @Override
    public String toString() {
        return "MadilUser{" +
                "id=" + id +
                ", fullName='" + fullName + '\'' +
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", pwd='" + pwd + '\'' +
                ", type='" + type + '\'' +
                ", location='" + location + '\'' +
                ", bookName='" + bookName + '\'' +
                ", dateBorrowed='" + dateBorrowed + '\'' +
                '}';
    }
}
