import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseURL = "http://localhost:8765/api/car";
  constructor(private http: HttpClient) { }

  getCarList(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseURL}/all`);
  }
  
  getCarById(id: number): Observable<Car> {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  addCar(car: Car): Observable<Object> {
    return this.http.post(`${this.baseURL}/create`, car);
  }

  updateCar(id: number, car: Car): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, car);
  }

  removeCar(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
