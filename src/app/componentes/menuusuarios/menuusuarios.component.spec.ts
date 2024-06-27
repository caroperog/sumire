import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuusuariosComponent } from './menuusuarios.component';

describe('MenuusuariosComponent', () => {
  let component: MenuusuariosComponent;
  let fixture: ComponentFixture<MenuusuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuusuariosComponent]
    });
    fixture = TestBed.createComponent(MenuusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
