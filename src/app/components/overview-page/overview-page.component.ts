import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent {
  public products: Product[];

  constructor(private readonly productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
