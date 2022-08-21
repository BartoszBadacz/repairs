import {Component, Input, OnInit} from '@angular/core';
import {RepairModel} from "../../../models/repair.model";

@Component({
  selector: 'app-repair-record',
  templateUrl: './repair-record.component.html',
  styleUrls: ['./repair-record.component.scss']
})
export class RepairRecordComponent implements OnInit {

  constructor() { }

  showDetails: boolean = false;

  ngOnInit(): void {
  }

  @Input() repair: RepairModel = {};

  onDetailsClick() {
    this.showDetails = !this.showDetails;
  }

}
