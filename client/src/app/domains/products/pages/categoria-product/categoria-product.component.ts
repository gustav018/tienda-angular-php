
//categoria-product.component.ts
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@/shared/services/cart.service';
import { ProductService } from '@/shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-categoria-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    HeaderComponent,
    RouterLinkWithHref,
  ],
  templateUrl: './categoria-product.component.html',
  styleUrl: './categoria-product.component.css'
})
export default class CategoriaProductComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  @Input() id?: string;

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getProducts_por_categoria();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  private getProducts_por_categoria() {
    this.productService.getProducts_por_categoria(this.id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}

