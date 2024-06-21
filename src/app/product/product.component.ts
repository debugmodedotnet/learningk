import { Component, Input, OnInit, WritableSignal, computed, effect, signal } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { IProduct } from '../product';
import { IEvent } from '../ievent';

// const template = `
// <app-product-details 
//   [product]="product" 
//  (productChange)="onProductChange($event)">
// </app-product-details>
// `;

const template = `
<app-product-details 
  [counter]="county"
  (counterChange)="cc($event)"
  [product]="pp()"
  (productChange)="changeProduct($event)">
</app-product-details>
`;

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductDetailsComponent],
  template: template,
})
export class ProductComponent {

  title = "Product Component";
  @Input() event? : IEvent;
  pp: WritableSignal<IProduct> = signal<IProduct>({
    Id: 1,
    Title: 'Leaf Rake',
    Price: 19.95,
  });

  county= 90; 

  constructor(){
  }
  changeProduct(p:any){
    console.log("dhananjay");
    console.log('changed product',p);
  }

  cc(c:number){
    console.log(c);
  }

}
