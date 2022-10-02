import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairFormRepairProgressSectionComponent } from './repair-form-repair-progress-section.component';

describe('RepairFormRepairProgressSectionComponent', () => {
  let component: RepairFormRepairProgressSectionComponent;
  let fixture: ComponentFixture<RepairFormRepairProgressSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairFormRepairProgressSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairFormRepairProgressSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
