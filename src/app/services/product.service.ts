import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
//import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44314/api/";
   
///prucodts/getall

  constructor(private httpClient:HttpClient) { }

  getProduct() :Observable<ListResponseModel<Product>> {
let newPath=this.apiUrl+"products/getall"

return   this.httpClient.get<ListResponseModel<Product>>(newPath);
    
}
getProductByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
  let newPath=this.apiUrl+"products/getbycategory?categoryId="+categoryId
  return this.httpClient.get<ListResponseModel<Product>>(newPath);
}






}
