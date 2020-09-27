import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloEmAtrasoFormComponent } from './tituloEmAtraso-form.component';

describe('TituloEmAtrasoFormComponent', () => {
  let component: TituloEmAtrasoFormComponent;
  let fixture: ComponentFixture<TituloEmAtrasoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloEmAtrasoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloEmAtrasoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
