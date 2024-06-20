import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfajoreshomeComponent } from './alfajoreshome.component';

describe('AlfajoreshomeComponent', () => {
  let component: AlfajoreshomeComponent;
  let fixture: ComponentFixture<AlfajoreshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlfajoreshomeComponent]
    });
    fixture = TestBed.createComponent(AlfajoreshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
