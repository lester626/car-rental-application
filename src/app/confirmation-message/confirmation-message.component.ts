import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-message',
  templateUrl: './confirmation-message.component.html',
  styleUrls: ['./confirmation-message.component.css']
})
export class ConfirmationMessageComponent implements OnInit {

  alert = false;
  constructor() { }

  ngOnInit(): void {
  }

  onAlert() {
    this.alert = true;
  }

  closeAlert() {
    this.alert = false;
  }
}
