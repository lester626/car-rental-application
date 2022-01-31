import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  car?: Car = new Car();
  constructor(private carService: CarService, private router: Router, private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.shareData.alert = false;
  }

  addCar() {
    this.car!.carStatus = "AVAILABLE";
    this.carService.addCar(this.car!).subscribe(data => {
      console.log("Added " + this.car);
      this.redirectTo()
    },
    error => console.log(error));
  }

  redirectTo() {
    this.router.navigate(["cars"]);
  }

  onSubmit() {
    this.shareData.alert = true;
    this.addCar();
  }

}
