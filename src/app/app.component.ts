import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
 user :string='Kaçakçaycı'
 product1={productId:1,productName:'şağak',categoryId:1,unitPrice:777}
 product2={productId:2,productName:'patapata',categoryId:1,unitPrice:777}
 product3={productId:3,productName:'vatantatatan',categoryId:1,unitPrice:777}
 product4={productId:4,productName:'şaaaak',categoryId:1,unitPrice:777}
 product5={productId:5,productName:'adınıs asizm<i',categoryId:1,unitPrice:777}
 product6={productId:6,productName:'o ne lan',categoryId:1,unitPrice:777}

products=[this.product1,this.product2,this.product3,this.product4,this.product5,this.product6];


}
