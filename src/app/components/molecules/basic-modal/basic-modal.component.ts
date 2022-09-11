import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormArray} from "@angular/forms";

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.scss']
})
export class BasicModalComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  get aliases() {
    return this.form.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }


  form = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: [''],
    address: this.formBuilder.group({
      city: [''],
      zipCode: [''],
      street: ['']
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  })

  ngOnInit(): void {
    this.printName();
  }

  onSubmit(): void {
    console.error(this.form.value)
  }

  printName() {
    this.form.controls.address.controls.city.setValue('Blumbuland');

  }
}
