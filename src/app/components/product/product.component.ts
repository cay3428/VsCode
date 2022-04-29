import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  products: Product[] = [];
dataLoaded = false;
filterText="";

constructor(private productService:ProductService,
  private activatedRoute:ActivatedRoute,private toastrService:ToastrService){}



  
 // constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
if(params["categoryId"]){
  this.getProductByCategory(params["categoryId"])
} else{
  this.getProduct()
}


    })

    //console.log("inştçalıştı");
//this.getProduct(); 

  }
  productsResponseModel:ProductResponseModel={
    data : this.products,
    message:"",
    success:true
     

  };


getProductByCategory(categoryId:number){
this.productService.getProductByCategory(categoryId).subscribe(response=>{
  this.products=response.data
  this.dataLoaded=true;
})



}

  getProduct() {
// console.log("api request başladı")

   this.productService.getProduct().subscribe(response=>{
    this.products=response.data
// console.log("api request bitti")
this.dataLoaded=true; 
  })
//    console.log("metod sona erdi");

    }

addToCart(product:Product) {
if(product.productId===1){
  this.toastrService.error("Hata bu ürün sepete eklenemez")
}else{ 
  this.toastrService.success("Sepete eklendi",product.productName)
}


  
}





  }



 



/* product1={productId:1,productName:'şağak',categoryId:1,unitPrice:777,unitsInStock:5}
  product2={productId:2,productName:'patapata',categoryId:1,unitPrice:777,unitsInStock:31}
  product3={productId:3,productName:'vatantatatan',categoryId:1,unitPrice:777,unitsInStock:81}
  product4={productId:4,productName:'şaaaak',categoryId:1,unitPrice:777,unitsInStock:999}
  product5={productId:5,productName:'adınıs asizm<i',categoryId:1,unitPrice:777,unitsInStock:69}
  product6={productId:6,productName:'o ne lan',categoryId:1,unitPrice:777,unitsInStock:100} */
/*   this.product1,this.product2,this.product3,this.product4,this.product5,this.product6] */