import {Component, Input, OnInit} from '@angular/core';
import {FormControlStatus, FormGroup} from "@angular/forms";
import {Icon} from "../../../../../models/icon.type";

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.statusIcon = this.formGroupStatusMapper(this.form_group.status);
    this.form_group.valueChanges.subscribe(value => {
      this.statusIcon = this.formGroupStatusMapper(this.form_group.status);
    })
  }

  @Input() title!: string;
  @Input() form_group!: FormGroup;
  @Input() isSectionDisabled: boolean = false;

  isVisible: boolean = false;
  statusIcon: Icon = ''

  toggleVisible() {
    this.isVisible = !this.isVisible;
  }


  formGroupStatusMapper(status: FormControlStatus): Icon {
    switch (status) {
      case 'VALID':
        return 'sentiment_satisfied_alt';
      case 'INVALID':
        return 'sentiment_dissatisfied';
      case "DISABLED":
        return 'block';
      case 'PENDING':
        return 'pending';
    }
  }
}
