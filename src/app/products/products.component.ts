import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from '../shared/cartservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
productdata:any;
  products: any;
  cartProducts: any;
  popupshown:boolean=false;
  constructor(private router: Router, private productshow:CartserviceService) { }

  ngOnInit() {
    let data=localStorage.getItem('cart');
    if(data !== null){
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }


    this.showporduct();
  }
  showporduct(){
    this.productshow.getProductlist().subscribe(respdata=>{
      this.productdata=respdata;
    });
  }

  selectedItem:any;
  openDetail(selectedItem){
    this.popupshown=true;
    this.selectedItem=selectedItem;
  }
  closePopup(){
    this.popupshown=false;
    this.selectedItem=null;
  }

  closePopupEvent(event){
    this.popupshown=event;
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
