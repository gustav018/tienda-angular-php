import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private cartService = inject(CartService);
  private router = inject(Router);

  hideSideMenu = signal(true);
  showModal = signal(false);

  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

  toggleModal() {
    this.showModal.update((prevState) => !prevState);
  }

  closeMenuAndRedirect() {
    this.hideSideMenu.set(true);
    this.router.navigate(['/cart']);
  }

  trackByFn(index: number, item: any) {
    return index;
  }
}
