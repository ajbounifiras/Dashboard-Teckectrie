import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsecteurComponent } from './addsecteur.component';

describe('AddsecteurComponent', () => {
  let component: AddsecteurComponent;
  let fixture: ComponentFixture<AddsecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
