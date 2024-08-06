import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
//Modulos
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Componenetes
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEditProductComponent,
    ListProductsComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
