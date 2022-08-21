import {Component, OnInit} from '@angular/core';
import {RepairModel} from "../../../models/repair.model";
import {RepairsService} from "../../../services/repairs.service";

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {

  constructor(private repairsService: RepairsService) {
  }

  repairs: RepairModel[] = [];

  ngOnInit(): void {
    this.loadRepairs();
  }

  loadRepairs() {
    this.repairsService.getRepairs().subscribe(repairs => this.repairs = repairs);
  }

}
