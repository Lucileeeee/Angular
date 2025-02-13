import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuneComponent } from './lune.component';

describe('LuneComponent', () => {
  let component: LuneComponent;
  let fixture: ComponentFixture<LuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
