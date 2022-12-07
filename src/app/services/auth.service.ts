import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }


public registration(registerForm:NgForm){

console.log(registerForm.value)

let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/user/register', registerForm.value)
      .subscribe(res => {
         console.log('inside postmehtod of sub.function', res);//only objects
      })
}

  
}
