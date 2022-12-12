import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getDoctorCount(){
    return this.httpClient.get('http://localhost:8080/doctor/count');
  }
}

