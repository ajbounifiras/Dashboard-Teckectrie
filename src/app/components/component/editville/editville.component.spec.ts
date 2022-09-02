import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvilleComponent } from './editville.component';

describe('EditvilleComponent', () => {
  let component: EditvilleComponent;
  let fixture: ComponentFixture<EditvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditvilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
