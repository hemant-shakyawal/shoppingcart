import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  constructor(private router: Router) { }

  ngOnInit() {
    let data=localStorage.getItem('cart');
    if(data !== null){
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
        id: 1,
        title: "Samsung",
        description: "Samsung",
        price: 24000
      },
      {
        id:2,
        title: "Nokia",
        description: "Nokia",
        price:800
      },
      {
        id:3,
        title: "oppo",
        description: "oppo",
         price:80000
      },
      {
        id:4,
        title: "Vivo V15",
        description: "Vivo V15",
               price:50000
      },
      {
        id:5,
        title: "Moto E5 Plus",
        description: "Moto E5 Plus",
         price:40000
      },
      {
        id:6,
        title: "Nokia 2.2 2",
        description: "Nokia 2.2 2",
        
        price:30000
      }
      
    ]
  }

  addToCart(index){
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if(data !== null){
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
