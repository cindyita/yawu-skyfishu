import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPrimaryComponent } from './slider-primary.component';

describe('SliderPrimaryComponent', () => {
  let component: SliderPrimaryComponent;
  let fixture: ComponentFixture<SliderPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
