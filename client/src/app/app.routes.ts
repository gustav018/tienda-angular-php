import { Routes } from '@angular/router';

import { NotFoundComponent } from '@/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@products/pages/list/list.component'),
      },
      {
        path: 'categoria/:id',
        loadComponent: () => import('@products/pages/categoria-product/categoria-product.component'),
      },
      {
        path: 'cart',
        loadComponent: () => import('@products/pages/proceso-pago/proceso-pago.component'),
      },
      {
        path: 'categoria/product/:id',
        loadComponent: () => import('@products/pages/product-detail/product-detail.component'),
      },
    
      {
        path: 'product/:id',
        loadComponent: () => import('@products/pages/product-detail/product-detail.component'),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
