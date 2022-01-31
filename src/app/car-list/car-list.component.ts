import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars?: Car[];
  alert?: boolean;
  messageAlert = "Car List updated!"
  constructor(private carService: CarService, 
    private router: Router, private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.getCars();
    this.alert = this.shareData.alert;
  }

  closeAlert() {
    this.shareData.alert = false;
    this.alert = false;
  }

  getCars() {
    this.carService.getCarList().subscribe(data => {
      this.cars = data;
    });
  }

  updateCar(id?: number) {
    this.router.navigate(['update/car', id]);
  }

  getCar(id?: number) {
    this.router.navigate(['car', id]);
  }

  deleteCar(id?: number) {
    this.carService.removeCar(id!).subscribe(data => {
      console.log("Car Deleted: " + id);
      this.messageAlert = "Car Deleted";
      this.alert = true;
      this.getCars();
    }, error => console.log(error));
  }
}
