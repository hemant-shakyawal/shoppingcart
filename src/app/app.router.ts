import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
export const router: Routes = [
	{ path: "", redirectTo: "products", pathMatch: "full" },
	{ path: "about", component: AboutComponent },
	{ path: "products", component: ProductsComponent },
	{ path: "home", component: HomeComponent },
	{ path: "cart", component: CartComponent },
	 { path: "productdisplay/:id", component: ProductdisplayComponent },
	
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
