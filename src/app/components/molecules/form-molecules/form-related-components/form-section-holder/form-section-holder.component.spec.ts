import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSectionHolderComponent } from './form-section-holder.component';

describe('FormSectionWrapperComponent', () => {
  let component: FormSectionHolderComponent;
  let fixture: ComponentFixture<FormSectionHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSectionHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSectionHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
