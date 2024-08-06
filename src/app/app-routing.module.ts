import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//1. importación de componente a renderizar
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';

const routes: Routes = [
  //Rutas y su respectivo componente
  { path: '', component: ListProductsComponent },
  { path: 'add', component: AddEditProductComponent },
  { path: 'edit/:id', component: AddEditProductComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
