import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public product: Product;

  constructor(private readonly currentRoute: ActivatedRoute, private readonly productService: ProductService) {
  }

  ngOnInit() {
    this.currentRoute.paramMap.pipe(
      map(paramMap => paramMap.get('name'))
    ).subscribe(name => this.product = this.productService.getProductByName(name));
  }

}
