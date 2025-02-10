import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoDansCompo2Component } from './compo-dans-compo2.component';

describe('CompoDansCompo2Component', () => {
  let component: CompoDansCompo2Component;
  let fixture: ComponentFixture<CompoDansCompo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoDansCompo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoDansCompo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
