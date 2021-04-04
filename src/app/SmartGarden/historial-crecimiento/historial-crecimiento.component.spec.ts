import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialCrecimientoComponent } from './historial-crecimiento.component';

describe('HistorialCrecimientoComponent', () => {
  let component: HistorialCrecimientoComponent;
  let fixture: ComponentFixture<HistorialCrecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialCrecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialCrecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
