import {Component, Input, OnInit} from '@angular/core';
import {RepairModel} from "../../../models/repair.model";

@Component({
  selector: 'app-repair-record-details',
  templateUrl: './repair-record-details.component.html',
  styleUrls: ['./repair-record-details.component.scss']
})
export class RepairRecordDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() repairRecord: RepairModel = {};

}
