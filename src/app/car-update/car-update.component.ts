import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  id?: number;
  car?: Car = new Car();
  constructor(private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.getCar();
    this.shareData.alert = false;
  }

  getCar() {
    this.id = this.route.snapshot.params['id'];
    this.carService.getCarById(this.id!).subscribe(data => {this.car = data;}, error => console.log(error));
  }
  
  redirectTo() {
    this.router.navigate(["cars"]);
  }

  onUpdate() {
    this.carService.updateCar(this.id!, this.car!).subscribe(data => {console.log("Updated data!"); this.redirectTo();}, error => console.log(error));
    this.shareData.alert = true;
  }

}
