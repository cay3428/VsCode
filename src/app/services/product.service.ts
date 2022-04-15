import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';
//import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44314/api/products/getall";
   


  constructor(private httpClient:HttpClient) { }

  getProduct() :Observable<ListResponseModel<Product>> {

return   this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
    




}}
