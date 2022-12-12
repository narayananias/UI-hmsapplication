import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  {path :'',component:LoginComponent},
  {path :'register',component :RegisterComponent},
<<<<<<< HEAD
  {path :'admindashboard',component :AdminDashboardComponent}
=======
  {path :'doctor-dashboard',component :DoctorDashboardComponent}

>>>>>>> 287d90326b26f8f2772273287df4a0a7bba3aa3d

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
