import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorTiposComponent } from './contenedor-tipos.component';

describe('ContenedorTiposComponent', () => {
  let component: ContenedorTiposComponent;
  let fixture: ComponentFixture<ContenedorTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenedorTiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
