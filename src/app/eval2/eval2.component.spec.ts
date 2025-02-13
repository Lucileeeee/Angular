import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eval2Component } from './eval2.component';

describe('Eval2Component', () => {
  let component: Eval2Component;
  let fixture: ComponentFixture<Eval2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eval2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eval2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
