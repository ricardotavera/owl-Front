import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from '../models/report';
import { Observable } from 'rxjs';
import { Cai } from '../models/cais';
import { Modality } from '../models/modality';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  private HOST_URL = ''

  constructor(private http: HttpClient) { }

  getReports(): Observable <Report[]>{
    return this.http.get<Report[]>(`${this.HOST_URL}assets/reports.json`)
            
  }

  sendReport(formValues, lat: number, lng: number){
    
    return this.http.post(`${this.HOST_URL}/api/reportes/`,
    {
      titulo: formValues.title,
      modalidad: formValues.modality,
      dia: formValues.time,
      hora: formValues.time,
      descripcion: formValues.description,
      lat: lat,
      lng: lng
    }
        
    )
  
  }


  getCais(): Observable <Cai[]>
  {
    return this.http.get<Cai[]>(`${this.HOST_URL}/api/cais/`)


  }


  getModalities(): Observable < Modality[]> {
    return this.http.get<Modality[]>(`${this.HOST_URL}/api/modalidades/`)
  }
}





