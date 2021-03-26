import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBordComponent } from './admin-bord.component';

describe('AdminBordComponent', () => {
  let component: AdminBordComponent;
  let fixture: ComponentFixture<AdminBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
