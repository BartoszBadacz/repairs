import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairFormEntrySectionComponent } from './repair-form-entry-section.component';

describe('RepairEntrySectionComponent', () => {
  let component: RepairFormEntrySectionComponent;
  let fixture: ComponentFixture<RepairFormEntrySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairFormEntrySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairFormEntrySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
