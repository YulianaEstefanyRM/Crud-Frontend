import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  listProducts: Product[] = [];
  //Variable para el manejo de la barra de progreso
  loading: boolean=false;



  constructor(private _productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
  //Cuando inicia la petición HTTP
  this.loading= true;

    this._productService.getListProducts().subscribe((data) => {
      console.log(data);
      this.listProducts = data;

  //Cuando finaliza la petición HTTP
  this.loading= false;
    })
  }

   deleteProduct(id: number) {
    this.loading = true;
    this._productService.deleteProduct(id).subscribe(() => {
      this.getListProducts();
     this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }


}
