import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairRecordDetailsComponent } from './repair-record-details.component';

describe('RepairRecordDetailsComponent', () => {
  let component: RepairRecordDetailsComponent;
  let fixture: ComponentFixture<RepairRecordDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairRecordDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairRecordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
