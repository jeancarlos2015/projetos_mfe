import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoPrimariaComponent } from './apresentacao-primaria.component';

describe('ApresentacaoPrimariaComponent', () => {
  let component: ApresentacaoPrimariaComponent;
  let fixture: ComponentFixture<ApresentacaoPrimariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresentacaoPrimariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresentacaoPrimariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
