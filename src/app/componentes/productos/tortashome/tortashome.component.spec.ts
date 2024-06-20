import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortashomeComponent } from './tortashome.component';

describe('TortashomeComponent', () => {
  let component: TortashomeComponent;
  let fixture: ComponentFixture<TortashomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TortashomeComponent]
    });
    fixture = TestBed.createComponent(TortashomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
