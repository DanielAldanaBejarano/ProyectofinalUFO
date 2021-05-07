import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'
import { Product } from '../../models/Products'
import { NgForm } from '@angular/forms'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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

  updateService(product: Product){
    this.ProductsService.selectedProduct = product;
  }

  createService(form: NgForm){  
    let flag = true
      for (let [key, value] of Object.entries(form.value)) {       
        if (value === "" || value===0) flag = false 
        if (key = "_id") flag = true   
        
      }    
    if (flag===false){
      Swal.fire(
        'Producto No Creado',
        'Por favor diligencie todos los campos',
        'error'
      )      
    }
    if (!form.value._id && form && flag===true){      
      
      this.ProductsService.createProduct(form.value).subscribe(
        res => {
          console.log(res)
          Swal.fire(
            'Producto Creado',
            'El Producto se creo correctamente',
            'success'
          )
          this.executeService()
          return res
        },
        err => {
          console.log("Error", err)
          Swal.fire(
            'Producto No Creado',
            'El Producto no se creo correctamente',
            'error'
          )
          return err
        }
      )
    } else if (form.value._id && flag===true) {
      this.ProductsService.updateProduct(form.value).subscribe(
        res => {
          console.log(res)
          Swal.fire(
            'Producto Actualizado',
            'El Producto se Actualizó correctamente',
            'success'
          )
          this.executeService()
          return res
        },
        err => {
          console.log(err)
          return err
        }
      )
    }
  }

  cleanForm(){
    console.log("Limpiado")
  }

  deleteService(_id: string, name: String){    
    let mensaje = `¿Estas seguro que deseas eliminar el producto ${name}?`
    Swal.fire({
      title: mensaje,
      text: "Recuerda que no puedes revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
      cancelButtonText: 'No!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ProductsService.deleteProduct(_id).subscribe(
          res => {
            console.log(res)
            this.executeService()
          },
          err => {
            console.log(err)
          }
        )
        Swal.fire(
          'Producto Eliminado',
          'El producto se elimino satisfactoriamente',
          'success'
        )
      }
    })
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
