import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartComponent,
    ProductCardComponent,
    OverviewPageComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
