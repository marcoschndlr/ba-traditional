import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: Product[];

  constructor(private readonly productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
