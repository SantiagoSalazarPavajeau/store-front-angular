import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginformComponent } from './loginform/loginform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    ProductsComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
