import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    const total = cart.reduce((total, product) => total + Number(product.price), 0);
    return Number(total.toFixed(2)); // Convertir el total a número con dos decimales
  });

  constructor() {}

  addToCart(product: Product) {
    this.cart.update((state) => [...state, product]);
  }

  emptyCart() {
    this.cart.set([]); // Vaciar el carrito
  }
  
  recalculateTotal() {
    return this.total(); // Recalcular el total, aunque computed ya lo hace automáticamente
  }
}
