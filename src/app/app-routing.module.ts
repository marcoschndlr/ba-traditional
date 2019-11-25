import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: OverviewPageComponent},
  {path: 'product/:name', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
