import { CurrencyPipe, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  model,
} from '@angular/core';
import { IProduct } from '../product';

const template = `
<div *ngIf="product()">
  <h2>{{ product().Title }}</h2>
  <div>Price: {{ product().Price | currency }}</div>
  <div>
    <label>Id:</label> {{ product().Id }}
  </div>
  <button (click)="notify(product())">Notify</button>
</div>
`;

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, NgIf],
  template: template,
})
// export class ProductDetailsComponent implements OnChanges, OnInit {
//   @Input() product?: IProduct;

//   @Output() productChange = new EventEmitter<IProduct>();
//   notify(p: IProduct) {
//     p.Price = p.Price + 100;
//     this.productChange.emit(p);
//   }
//   ngOnChanges(changes: SimpleChanges): void {
//     console.log(this.product);
//   }
//   ngOnInit(): void {}
// }
export class ProductDetailsComponent  {
    product = model.required<IProduct>();
    counter = model.required<number>();

    notify(p: IProduct) {
      console.log("dhananjay abd");
      p.Price = p.Price + 100;

      let p1: IProduct ={
        Id: 1,
        Title: 'Leaf Rake',
        Price: p.Price
      }
      this.product.set(p1);
     // this.counter.set(99);
    }
}