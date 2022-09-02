import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsecteurComponent } from './viewsecteur.component';

describe('ViewsecteurComponent', () => {
  let component: ViewsecteurComponent;
  let fixture: ComponentFixture<ViewsecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
