import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairFormDetailsSectionComponent } from './repair-form-details-section.component';

describe('RepairFormDetailsSectionComponent', () => {
  let component: RepairFormDetailsSectionComponent;
  let fixture: ComponentFixture<RepairFormDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairFormDetailsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairFormDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
