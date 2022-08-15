import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairRecordHeadingComponent } from './repair-record-heading.component';

describe('RepairRecordHeadingComponent', () => {
  let component: RepairRecordHeadingComponent;
  let fixture: ComponentFixture<RepairRecordHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairRecordHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairRecordHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
