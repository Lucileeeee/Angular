import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eval1Component } from './eval-1.component';

describe('Eval1Component', () => {
  let component: Eval1Component;
  let fixture: ComponentFixture<Eval1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eval1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eval1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
