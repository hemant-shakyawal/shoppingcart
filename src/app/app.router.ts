import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { ProductsComponent } from './products/products.component';

import { CartComponent } from './cart/cart.component';

import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
export const router: Routes = [
	{ path: "", redirectTo: "products", pathMatch: "full" },

	{ path: "products", component: ProductsComponent },

	{ path: "cart", component: CartComponent },
	 { path: "productdisplay/:id", component: ProductdisplayComponent },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
