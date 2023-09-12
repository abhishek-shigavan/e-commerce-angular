import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = [{name: "Samsung"}, {name: "Apple"}, {name: "Redmi"}, {name: "Oppo"}]
}
