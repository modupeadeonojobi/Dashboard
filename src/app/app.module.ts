import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';


import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { MatSlideToggleModule, MatSlideToggle } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FemaleComponent } from './female/female.component';
import { MaleComponent } from './male/male.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FemaleComponent,
    MaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    // MatOptionModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatPaginatorModule,
    // MatSlideToggle,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
