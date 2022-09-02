import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditetablissementComponent } from './editetablissement.component';

describe('EditetablissementComponent', () => {
  let component: EditetablissementComponent;
  let fixture: ComponentFixture<EditetablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditetablissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditetablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
