import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import {MatDialogModule} from '@angular/material/dialog';

>>>>>>> 287d90326b26f8f2772273287df4a0a7bba3aa3d



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    AdminDashboardComponent
=======
    DoctorDashboardComponent,
    ConfirmdialogComponent
>>>>>>> 287d90326b26f8f2772273287df4a0a7bba3aa3d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
<<<<<<< HEAD
    MatListModule
=======
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule
    
>>>>>>> 287d90326b26f8f2772273287df4a0a7bba3aa3d
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
