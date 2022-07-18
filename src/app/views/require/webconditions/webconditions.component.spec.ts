import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebconditionsComponent } from './webconditions.component';

describe('WebconditionsComponent', () => {
  let component: WebconditionsComponent;
  let fixture: ComponentFixture<WebconditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebconditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
