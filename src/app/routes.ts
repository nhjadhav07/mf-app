import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: '**',
    redirectTo: 'overview',
  },
];
