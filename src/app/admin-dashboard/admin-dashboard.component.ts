import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{


 constructor(private apiservice:ApiService) {}

 

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    
  }
 

  
  
  
}

