import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisResidenciaComponent } from './pais-residencia.component';

describe('PaisResidenciaComponent', () => {
  let component: PaisResidenciaComponent;
  let fixture: ComponentFixture<PaisResidenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisResidenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisResidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
