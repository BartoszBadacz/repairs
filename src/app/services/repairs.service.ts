import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RepairModel} from "../models/repair.model";

@Injectable({
  providedIn: 'root'
})
export class RepairsService {

  constructor(private http: HttpClient) {
  }

  private repairsUrl = 'api/repairs'

  getRepairs(): Observable<RepairModel[]> {
    return this.http.get<RepairModel[]>(this.repairsUrl)
  }
}
