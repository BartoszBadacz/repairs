import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.scss']
})
export class BasicModalComponent implements OnInit {

  constructor() {
  }

  name = new FormControl('');

  ngOnInit(): void {
    this.printName();
  }


  printName() {
    console.log(this.name.value)
    let counter = 0;
    window.setInterval(() => {
      counter++;
      this.name.setValue(counter.toString())
    }, 1000)
  }
}
