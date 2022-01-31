package com.project.carrental.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "car")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int car_id;

    @Column(name = "brand")
    private String brand;

    @Column(name = "model")
    private String model;

    @Column(name = "body_type")
    private String bodyType;

    @Column(name = "car_year")
    private Long carYear;

    @Column(name = "colour")
    private String colour;

    @Column(name = "mileage")
    private Long mileage;

    @Column(name = "car_status")
    private String carStatus;

    @Column(name = "amount")
    private Long amount;
}
