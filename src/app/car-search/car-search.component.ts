import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {

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
    this.carService.getCarById(this.id!).subscribe(data => {
      this.car = data;
    }, error => console.log(error));
  }

  goBack() {
    this.router.navigate(["cars"]);
  }
}
