import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbienfaitComponent } from './editbienfait.component';

describe('EditbienfaitComponent', () => {
  let component: EditbienfaitComponent;
  let fixture: ComponentFixture<EditbienfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbienfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbienfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
