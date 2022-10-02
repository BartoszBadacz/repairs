import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-section-wrapper',
  templateUrl: './form-section-wrapper.component.html',
  styleUrls: ['./form-section-wrapper.component.scss']
})
export class FormSectionWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title!: string;
}
