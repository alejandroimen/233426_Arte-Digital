import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenedorInfoComponent } from './contenedor-info/contenedor-info.component';
import { GeneralsModule } from '../generals/generals.module';
import { CardArtistComponent } from './card-artist/card-artist.component';
import { ContenedorTiposComponent } from './contenedor-tipos/contenedor-tipos.component';

@NgModule({
  declarations: [
    ContenedorInfoComponent,
    CardArtistComponent,
    ContenedorTiposComponent
  ],
  imports: [
    CommonModule,
    GeneralsModule
  ],
  exports: [
    ContenedorInfoComponent,
    CardArtistComponent,
    ContenedorTiposComponent
  ]
})
export class PrincipalModule { }
