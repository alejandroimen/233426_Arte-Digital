import { Component, Input } from '@angular/core';

@Component({
  selector: 'boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input() mensaje: String = ""
}
