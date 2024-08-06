import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //en esta variable vamos a almacenar  el local host 3000/
  private myAppUrl: string;
  //
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    //aqui almacenamos el localhost3000/
    this.myAppUrl = environment.endpoint;
    //aqui almacenamos el api/productos/
    this.myApiUrl = 'api/productos/'
  }

  getListProducts(): Observable<Product[]> {
   return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveProduct(product: Product): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,product)
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  updateProduct(id: number, product: Product): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, product);
  }
}
