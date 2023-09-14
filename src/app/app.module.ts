import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheaderComponent } from './common/topheader/topheader.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryDetailComponent } from './layout/category-detail/category-detail.component';
import { ProductDetailsComponent } from './layout/product-details/product-details.component';
import { LoginComponent } from './layout/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryDetailComponent,
    ProductDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CarouselModule,BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
