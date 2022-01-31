import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-share-data',
  templateUrl: './share-data.component.html',
  styleUrls: ['./share-data.component.css']
})
export class ShareDataComponent implements OnInit {

  value = false;
  @Input() passedString?: string;
  @Output() sampleBooleanEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  clickToUpdate() {
    if(this.value == false) {
      this.value = true;
    } else {
      this.value = false;
    }
    this.sampleBooleanEvent.emit(this.value);
  }

}
