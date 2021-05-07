import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(public ProductService: ProductsService) { }

  ngOnInit(): void {
    this.executeService()
  }

  executeService(){
    this.ProductService.getProducts().subscribe(
      res => {
        this.ProductService.products = res
        console.log(res)
        return this.ProductService.products
      },
      err => {
        this.ProductService.products = err
        return this.ProductService.products
      }
    )
  }

  accept(){
    alert("Producto Comprado")
  }

}
