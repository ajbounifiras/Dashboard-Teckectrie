import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvilleComponent } from './addville.component';

describe('AddvilleComponent', () => {
  let component: AddvilleComponent;
  let fixture: ComponentFixture<AddvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
