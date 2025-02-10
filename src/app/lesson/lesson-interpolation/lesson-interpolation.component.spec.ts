import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonInterpolationComponent } from './lesson-interpolation.component';

describe('LessonInterpolationComponent', () => {
  let component: LessonInterpolationComponent;
  let fixture: ComponentFixture<LessonInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonInterpolationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
