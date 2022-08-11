import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPatientDetailComponent } from './dialog-patient-detail.component';

describe('DialogPatientDetailComponent', () => {
  let component: DialogPatientDetailComponent;
  let fixture: ComponentFixture<DialogPatientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPatientDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPatientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
