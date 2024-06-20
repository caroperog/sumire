import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrownieshomeComponent } from './brownieshome.component';

describe('BrownieshomeComponent', () => {
  let component: BrownieshomeComponent;
  let fixture: ComponentFixture<BrownieshomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrownieshomeComponent]
    });
    fixture = TestBed.createComponent(BrownieshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
