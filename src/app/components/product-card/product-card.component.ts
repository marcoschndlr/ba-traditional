import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input()
  public product: Product;

  constructor(private readonly router: Router) {
  }

  public clicked(): void {
    this.router.navigate(['product', this.product.name]);
  }
}
