import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'
import { Product } from '../../models/Products'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.executeService()
  }

  /* Metodos = funciones */

  executeService(){ /* esto es un metodo y son funcionalidades de una clase */
    this.ProductsService.getProducts().subscribe(
      res => {
        this.ProductsService.products = res
        console.log(res)
        return this.ProductsService.products
      },
      err => {
        this.ProductsService.products = err
        return this.ProductsService.products
      }
    )
  }

  filterByName(){
    this.ProductsService.getProductsByName().subscribe(
      res => {
        this.ProductsService.products = res
        console.log(res)
        return this.ProductsService.products
      },
      err => {
        this.ProductsService.products = err
        return this.ProductsService.products
      }
    )
  }

  filterBySet(){
    this.ProductsService.getProductsBySet().subscribe(
      res => {
        this.ProductsService.products = res
        console.log(res)
        return this.ProductsService.products
      },
      err => {
        this.ProductsService.products = err
        return this.ProductsService.products
      }
    )
  }

  filterByPrice(){
    this.ProductsService.getProductsByPrice().subscribe(
      res => {
        this.ProductsService.products = res
        console.log(res)
        return this.ProductsService.products
      },
      err => {
        this.ProductsService.products = err
        return this.ProductsService.products
      }
    )
  }

  filterByCreatedAt(){
    this.ProductsService.getProductsByCreatedAt().subscribe(
      res => {
        this.ProductsService.products = res
        console.log(res)
        return this.ProductsService.products
      },
      err => {
        this.ProductsService.products = err
        return this.ProductsService.products
      }
    )
  }

  filterByUpdatedAt(){
    this.ProductsService.getProductsByUpdatedAt().subscribe(
      res => {
        this.ProductsService.products = res
        console.log(res)
        return this.ProductsService.products
      },
      err => {
        this.ProductsService.products = err
        return this.ProductsService.products
      }
    )
  }

  filterByCategory(){
    this.ProductsService.getProductsByCategory().subscribe(
      res => {
        this.ProductsService.products = res
        console.log(res)
        return this.ProductsService.products
      },
      err => {
        this.ProductsService.products = err
        return this.ProductsService.products
      }
    )
  }

  filterBySize(){
    this.ProductsService.getProductsBySize().subscribe(
      res => {
        this.ProductsService.products = res
        console.log(res)
        return this.ProductsService.products
      },
      err => {
        this.ProductsService.products = err
        return this.ProductsService.products
      }
    )
  }

  filterByStock(){
    this.ProductsService.getProductsByStock().subscribe(
      res => {
        this.ProductsService.products = res
        console.log(res)
        return this.ProductsService.products
      },
      err => {
        this.ProductsService.products = err
        return this.ProductsService.products
      }
    )
  }

}
