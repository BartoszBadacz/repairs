import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsPageComponent } from './repairs-page.component';

describe('RepairsComponent', () => {
  let component: RepairsPageComponent;
  let fixture: ComponentFixture<RepairsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
