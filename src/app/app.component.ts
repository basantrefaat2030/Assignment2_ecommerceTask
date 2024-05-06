// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // constructor(private http :HttpClient) {

  // }
  title = 'ecommerce-task';

   products:any = []

   OnProductCreated(productData :{ProductName:string , ProductDescription:string , ProductPrice:number , ProductImage:string}){
    this.products.push({productName:productData.ProductName , productDescription:productData.ProductDescription , productPrice: productData.ProductPrice ,productImage:productData.ProductImage})
 }

}
