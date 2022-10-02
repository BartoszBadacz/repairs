import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairFormRepairReturnSectionComponent } from './repair-form-repair-return-section.component';

describe('RepairFormRepairReturnSectionComponent', () => {
  let component: RepairFormRepairReturnSectionComponent;
  let fixture: ComponentFixture<RepairFormRepairReturnSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairFormRepairReturnSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairFormRepairReturnSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
