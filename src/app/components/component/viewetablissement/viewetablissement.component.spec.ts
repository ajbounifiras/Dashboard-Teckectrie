import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewetablissementComponent } from './viewetablissement.component';

describe('ViewetablissementComponent', () => {
  let component: ViewetablissementComponent;
  let fixture: ComponentFixture<ViewetablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewetablissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewetablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
