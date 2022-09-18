import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormArray} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.scss']
})
export class BasicModalComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  form: any;

  get aliases() {
    return this.form.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  options: string[] = ['red', 'white', 'green'];


  ngOnInit(): void {

    this.loadForm();
    // this.dynamic-form?.get('city').valueChanges.subscribe((value: string) => this.checkValue(value))
    // this.printName();
  }

  onSubmit(): void {
    console.error(this.form.value)
  }

  checkValue(value: string): void {
    console.log(value)
  }

  loadForm() {
    this.form = this.formBuilder.group({
      firstName: <string[] | null>['', [Validators.required, Validators.minLength(5)]],
      lastName: <string[] | null>[''],
      address: this.formBuilder.group({
        city: [''],
        zipCode: [''],
        street: ['']
      }),
      cars: [this.options[2]],
      aliases: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    })
  }
}
