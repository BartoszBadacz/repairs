import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairFormReturnFromRepairCenterSectionComponent } from './repair-form-return-from-repair-center-section.component';

describe('RepairFormReturnFromRepairCenterSectionComponent', () => {
  let component: RepairFormReturnFromRepairCenterSectionComponent;
  let fixture: ComponentFixture<RepairFormReturnFromRepairCenterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairFormReturnFromRepairCenterSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairFormReturnFromRepairCenterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
