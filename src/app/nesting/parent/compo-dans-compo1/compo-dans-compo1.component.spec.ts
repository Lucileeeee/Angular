import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoDansCompo1Component } from './compo-dans-compo1.component';

describe('CompoDansCompo1Component', () => {
  let component: CompoDansCompo1Component;
  let fixture: ComponentFixture<CompoDansCompo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoDansCompo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoDansCompo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
