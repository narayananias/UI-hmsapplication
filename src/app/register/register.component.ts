import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ThemePalette } from '@angular/material/core';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  color: ThemePalette = "primary";
  submitted = false;

  constructor(private authService: AuthService,public builder: FormBuilder) { }

  registerForm=this.builder.group({
    username: ['',[Validators.required,Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$')]],
    password: ['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
    dob:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    gender:['male',[Validators.required]]
  })


  get myForm() {
    return this.registerForm.controls;
  }




  // public register(registerForm:NgForm) {

  //  this.authService.registration(registerForm);
  

  // }

  onSubmit(){
    this.submitted=true;
    if (!this.registerForm.valid) {
      alert('Please fill all the required fields to create a super hero!');
      return false;
    } else {
      return console.log(this.registerForm.value);
    }
  }

clearForm(){

  this.registerForm.reset();
}


}
