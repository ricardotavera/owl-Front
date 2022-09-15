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


  private HOST_URL = 'https://aa805702-0f8c-4edc-919f-d49a5ece66da.mock.pstmn.io'

  public modalities:Observable<Modality[]>


  constructor(private http: HttpClient) { 

    this.modalities = this.getModalities();
  
  }

  getReports(): Observable <Report[]>{
    
    return this.http.get<Report[]>(`assets/data.json`)
            
  }

  sendReport(formValues, lat:number, lng:number) {
    
    return this.http.post(`${this.HOST_URL}/api/reportes/`,
    {
      titulo: formValues.title,
      modalidad: formValues.modality,
      fecha: formValues.time,
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





