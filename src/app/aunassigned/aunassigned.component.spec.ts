import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AunassignedComponent } from './aunassigned.component';

describe('AunassignedComponent', () => {
  let component: AunassignedComponent;
  let fixture: ComponentFixture<AunassignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AunassignedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AunassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
