import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDecisionSectionComponent } from './customer-decision-section.component';

describe('CustomerDecisionSectionComponent', () => {
  let component: CustomerDecisionSectionComponent;
  let fixture: ComponentFixture<CustomerDecisionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDecisionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDecisionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
