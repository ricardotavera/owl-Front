import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from '../models/report';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor(private http: HttpClient) { }

  getReports(): Observable <Report[]>{
    return this.http.get<Report[]>('assets/reports.json')
            
  }


}
