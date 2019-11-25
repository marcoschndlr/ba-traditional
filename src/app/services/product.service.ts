import { Injectable } from '@angular/core';
import { products } from './products';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {
  }

  public getProducts(): Product[] {
    return products;
  }

  public getProductByName(name: string): Product {
    return products.find(product => product.name === name);
  }
}
