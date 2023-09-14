import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productcount = 0;

  productadd(){
    this.productcount++
  }
  producremove(){
    this.productcount--
  }
}
