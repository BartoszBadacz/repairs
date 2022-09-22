import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplaryFormComponent } from './exemplary-form.component';

describe('ExemplaryFormComponent', () => {
  let component: ExemplaryFormComponent;
  let fixture: ComponentFixture<ExemplaryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplaryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
