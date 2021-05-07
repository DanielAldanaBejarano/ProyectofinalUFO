import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit {

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
