package com.sts.entity;

import java.util.List;

import com.sts.enums.EmployeeStatus;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NonNull;

@Entity
@Data
@Table(name = "employees")
public class Employee 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    @Column
    private String specialization;
    
  //  @Column(columnDefinition = "ENUM('ACTIVE', 'OFFLINE")
    @NonNull
    @Enumerated(EnumType.STRING)
    private EmployeeStatus status; // AVAILABLE, BUSY, ON_ROUTE, OFFLINE
    
    @OneToMany(mappedBy = "assignedEmployee", cascade = CascadeType.ALL)
    private List<Ticket> assignedTickets;
    
    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL)
    private List<Review> reviews;
    
    @OneToOne(mappedBy = "employee", cascade = CascadeType.ALL)
    private Location currentLocation;
    
    @Column
    private Double averageRating;
    
    @Column
    private Integer totalReviews;
    
    // Constructors, getters, setters
}