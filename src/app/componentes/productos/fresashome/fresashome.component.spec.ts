import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresashomeComponent } from './fresashome.component';

describe('FresashomeComponent', () => {
  let component: FresashomeComponent;
  let fixture: ComponentFixture<FresashomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FresashomeComponent]
    });
    fixture = TestBed.createComponent(FresashomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
