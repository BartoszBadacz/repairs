import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-section-holder',
  templateUrl: './form-section-holder.component.html',
  styleUrls: ['./form-section-holder.component.scss']
})
export class FormSectionHolderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title!: string;
}
