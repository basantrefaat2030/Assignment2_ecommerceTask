import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  constructor(private http: HttpClient){

  }

  fileName:string;

@Output()ProductCreated =  new EventEmitter<{ProductName:string , ProductDescription:string , ProductPrice:number ,ProductImage:string }>;

 OnFileSelected(event:any){
  if(event.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload=(e : any)=>{
      // console.log(this.fileName)
      //this.ProductCreated.emit({ ProductName: '', ProductDescription: '', ProductPrice: 0, Image: e.target.result});
      this.fileName = e.target.result;
    }
  }
}


  AddProduct(proName:HTMLInputElement , proDescription :HTMLInputElement, proPrice :HTMLInputElement , im : HTMLInputElement){
    this.ProductCreated.emit({ProductName : proName.value , ProductDescription:proDescription.value,ProductPrice:proPrice.valueAsNumber ,ProductImage:this.fileName })
  }
}
