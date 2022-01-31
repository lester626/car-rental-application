package com.project.carrental.controllers;

import com.project.carrental.exceptions.ResourceNotFoundException;
import com.project.carrental.models.Car;
import com.project.carrental.repositories.CarRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping(value = "/api/car")
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping("/all")
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable int id) {
        Car car = carRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car not exist."));
        return ResponseEntity.ok(car);
    }

    @PostMapping("/create")
    public Car addCar(@RequestBody Car car) {
        return carRepository.save(car);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCarById(@PathVariable int id, @RequestBody Car carDetails) {
        Car car = carRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car not exist."));

        car.setBrand(carDetails.getBrand());
        car.setModel(carDetails.getModel());
        car.setBodyType(carDetails.getBodyType());
        car.setCarYear(carDetails.getCarYear());
        car.setColour(carDetails.getColour());
        car.setMileage(carDetails.getMileage());
        car.setCarStatus(carDetails.getCarStatus());
        car.setAmount(carDetails.getAmount());

        Car updatedCar = carRepository.save(car);
        return ResponseEntity.ok(updatedCar);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCarById(@PathVariable int id) {
        Car car = carRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Car not exist."));
        carRepository.delete(car);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
//
