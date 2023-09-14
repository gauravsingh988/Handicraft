import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { CategoryDetailComponent } from './layout/category-detail/category-detail.component';
import { ProductDetailsComponent } from './layout/product-details/product-details.component';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'index', component: HomeComponent },
  { path: 'category', component: CategoryDetailComponent },
  { path: 'category/product-detail', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
