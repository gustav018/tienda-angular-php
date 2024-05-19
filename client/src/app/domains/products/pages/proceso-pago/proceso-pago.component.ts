import { Component, inject } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLinkWithHref],
  templateUrl: './proceso-pago.component.html',
  styleUrls: ['./proceso-pago.component.css']
})
export default class ProcesoPagoComponent {
  private cartService = inject(CartService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  cart = this.cartService.cart;
  total = this.cartService.total;

  personalDataForm: FormGroup;

  constructor() {
    this.personalDataForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      numeroTarjeta: ['', Validators.required],
      exp: ['', Validators.required],
      cvv: ['', Validators.required],
      titular: ['', Validators.required],
      codigoPostal: ['', Validators.required]
    });
  }

  confirmPurchase() {
    if (this.personalDataForm.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor complete todos los campos requeridos.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
      return;
    }

    Swal.fire({
      title: 'Compra confirmada',
      text: 'Gracias por su compra!',
      icon: 'success',
      confirmButtonText: 'Cerrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.emptyCart();  // Vaciar el carrito
        this.cart = this.cartService.cart; // Actualizar el carrito
        this.total = this.cartService.total; // Actualizar el total
        this.router.navigate(['/']); // Navegar a la página de inicio
      }
    });
  }
}
