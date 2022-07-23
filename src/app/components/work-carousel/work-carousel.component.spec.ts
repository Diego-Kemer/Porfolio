import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCarouselComponent } from './work-carousel.component';

describe('WorkCarouselComponent', () => {
  let component: WorkCarouselComponent;
  let fixture: ComponentFixture<WorkCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
