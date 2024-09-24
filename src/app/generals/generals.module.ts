import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BotonComponent } from './boton/boton.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    BotonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    BotonComponent
  ]
})
export class GeneralsModule { }
