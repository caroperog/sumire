import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaprivusuariosComponent } from './zonaprivusuarios.component';

describe('ZonaprivusuariosComponent', () => {
  let component: ZonaprivusuariosComponent;
  let fixture: ComponentFixture<ZonaprivusuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaprivusuariosComponent]
    });
    fixture = TestBed.createComponent(ZonaprivusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
