import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {
  
  data:any ;
  sub;
  id;
  constructor(private route: ActivatedRoute) { 

    
  }

  ngOnInit() {
  //   this.route.paramMap.subscribe(params => { 
  //     this.id = params.get('id');
  //     this.price=params.get('price');
  //     console.log(this.id) ;
  //     console.log(this.price) ;
  // });
  // this.route.queryParams
  // .filter(params => params.reading)
  // .subscribe(params => {
  // console.log(params); // DATA WILL BE A JSON STRING- WE PARSE TO GET BACK OUR 
  //                      //OBJECT

  // this.data = JSON.parse(params.item) ;

  // console.log(this.data,'PASSED DATA'); //Gives {name:"Nelson", bankAccount:"1 
  //                                       //million dollars"}
  //  });

  this.sub=this.route.paramMap.subscribe(params => { 
    console.log(params);
     this.id = params.get('id'); 
    //  let products=this._productService.getProducts();
    //  this.product=products.find(p => p.productID==this.id);    
 });
  }

}
