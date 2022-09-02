import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvilleComponent } from './viewville.component';

describe('ViewvilleComponent', () => {
  let component: ViewvilleComponent;
  let fixture: ComponentFixture<ViewvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
