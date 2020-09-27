import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloEmAtrasoListComponent } from './TituloEmAtraso-list.component';

describe('TituloEmAtrasoListComponent', () => {
  let component: TituloEmAtrasoListComponent;
  let fixture: ComponentFixture<TituloEmAtrasoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloEmAtrasoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloEmAtrasoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
