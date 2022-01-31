import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rental-app';

  titleString = "Test Passing Data"
  viewString = false;

  currentString(value: boolean) {
    this.viewString = value;
  }
}
