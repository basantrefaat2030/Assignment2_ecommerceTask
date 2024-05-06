import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  // productName:string = "Lab top";
  // productDesc:string = " hello from ecpmmerce task";
  // productPrice:number = 30000.34;
  @Input() productElement: {productName:string , productDescription:string,productPrice:number , productImage:string}

}
