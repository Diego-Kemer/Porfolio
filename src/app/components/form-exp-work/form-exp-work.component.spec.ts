import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExpWorkComponent } from './form-exp-work.component';

describe('FormExpWorkComponent', () => {
  let component: FormExpWorkComponent;
  let fixture: ComponentFixture<FormExpWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExpWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExpWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
