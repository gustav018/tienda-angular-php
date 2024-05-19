// product.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  constructor() {}
  getProducts_por_categoria( category_id?: string ) {
   let url = 'http://localhost/gym/productos_por_categoria.php';
    if (category_id) {
      url += `?category_id=${category_id}`;
    }

    return this.http.get<Product[]>(url);
    
  }

  getProducts(category_id?: string) {
    const url = new URL('http://localhost/gym/getAll.php');
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }

    return this.http.get<Product[]>(url.toString());
  }

  getOne(id: string) {
    return this.http.get<Product>(
      `http://localhost/gym/get.php/?id=${id}`
    );
  }
}
