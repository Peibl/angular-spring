package com.example.app.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "post", schema = "dbapp", catalog = "")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String text;
    private String image;
    private Date creation_date;
    @JoinColumn(name = "creator_id")
    @ManyToOne
    private User user_creator;


    public Post() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


    public Date getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(Date creation_date) {
        this.creation_date = creation_date;
    }

    public User getUser_creator() {
        return user_creator;
    }

    public void setUser_creator(User user_creator) {
        this.user_creator = user_creator;
    }
}
