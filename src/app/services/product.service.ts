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
}
