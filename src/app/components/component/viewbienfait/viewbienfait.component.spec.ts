import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbienfaitComponent } from './viewbienfait.component';

describe('ViewbienfaitComponent', () => {
  let component: ViewbienfaitComponent;
  let fixture: ComponentFixture<ViewbienfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbienfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbienfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
