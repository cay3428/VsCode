import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  
 
 products:Product[]=[];
 
  constructor() { }

  ngOnInit(): void {
  }

}
/* product1={productId:1,productName:'şağak',categoryId:1,unitPrice:777,unitsInStock:5}
  product2={productId:2,productName:'patapata',categoryId:1,unitPrice:777,unitsInStock:31}
  product3={productId:3,productName:'vatantatatan',categoryId:1,unitPrice:777,unitsInStock:81}
  product4={productId:4,productName:'şaaaak',categoryId:1,unitPrice:777,unitsInStock:999}
  product5={productId:5,productName:'adınıs asizm<i',categoryId:1,unitPrice:777,unitsInStock:69}
  product6={productId:6,productName:'o ne lan',categoryId:1,unitPrice:777,unitsInStock:100} */
/*   this.product1,this.product2,this.product3,this.product4,this.product5,this.product6] */