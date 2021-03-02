import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginformComponent } from '../loginform/loginform.component';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [
  {path:'login', component: LoginformComponent},
  {path: 'products', component: ProductsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
