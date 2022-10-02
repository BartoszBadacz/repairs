import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairFormEstimationDetailsSectionComponent } from './repair-form-estimation-details-section.component';

describe('RepairFormEstimationDetailsSectionComponent', () => {
  let component: RepairFormEstimationDetailsSectionComponent;
  let fixture: ComponentFixture<RepairFormEstimationDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairFormEstimationDetailsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairFormEstimationDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
