import { Component, OnInit } from '@angular/core';
import {RepairModel, repairs} from "../../../models/repair.model";

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {

  constructor() { }

  repairs: RepairModel[] = repairs;

  ngOnInit(): void {
  }

}
