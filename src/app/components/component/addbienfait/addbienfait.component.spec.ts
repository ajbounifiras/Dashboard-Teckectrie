import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbienfaitComponent } from './addbienfait.component';

describe('AddbienfaitComponent', () => {
  let component: AddbienfaitComponent;
  let fixture: ComponentFixture<AddbienfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbienfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbienfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
