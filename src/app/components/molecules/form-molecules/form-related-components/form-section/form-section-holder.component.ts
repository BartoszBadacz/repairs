import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section-holder.component.html',
  styleUrls: ['./form-section-holder.component.scss']
})
export class FormSectionHolderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title!: string;
}
