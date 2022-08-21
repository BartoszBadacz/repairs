import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {RepairModel} from "../models/repair.model";
import {REPAIRS} from "../mock/repairs.mock";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const repairs: RepairModel[] = REPAIRS;
    return {repairs};
  }
}
