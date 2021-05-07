import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

/* Importar producto */
import { Product } from '../models/Products'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL_API:string = 'http://localhost:5000/api'
  selectedProduct: Product = {
    _id: '',
    name: '',
    set: '',
    price: 0,
    category: '',    
    size: '',
    stock: 0,
    description: '',
    imgUrl: ''
  }

  products:Product[]
  
  constructor(private http: HttpClient) { }
  
  getProducts(){
    return this.http.get<Product[]>(this.URL_API)
  }

  getProductsByName(){
    return this.http.get<Product[]>(`${this.URL_API}/filtername`)
  }
  getProductsBySet(){
    return this.http.get<Product[]>(`${this.URL_API}/filterset`)
  }

  getProductsByPrice(){
    return this.http.get<Product[]>(`${this.URL_API}/filterprice`)
  }

  getProductsByCreatedAt(){
    return this.http.get<Product[]>(`${this.URL_API}/filtercreatedAt`)
  }
  
  getProductsByUpdatedAt(){
    return this.http.get<Product[]>(`${this.URL_API}/filterupdatedAt`)
  }

  getProductsByCategory(){
    return this.http.get<Product[]>(`${this.URL_API}/filtercategory`)
  }

  getProductsBySize(){
    return this.http.get<Product[]>(`${this.URL_API}/filtersize`)
  }

  getProductsByStock(){
    return this.http.get<Product[]>(`${this.URL_API}/filterstock`)
  }

  createProduct(product: Product){
    return this.http.post(this.URL_API, product)
  }

  deleteProduct(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  updateProduct(product: Product){
    return this.http.put(`${this.URL_API}/${product._id}`, product)
  }
}