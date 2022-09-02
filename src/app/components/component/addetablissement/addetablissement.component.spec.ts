import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddetablissementComponent } from './addetablissement.component';

describe('AddetablissementComponent', () => {
  let component: AddetablissementComponent;
  let fixture: ComponentFixture<AddetablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddetablissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddetablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
