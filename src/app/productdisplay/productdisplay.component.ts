import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {
  @Input() selectedItem:any;
  @Output() closeEvent=new EventEmitter();
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

  }
  closePopup(){
    this.closeEvent.emit(false);
      }
}
