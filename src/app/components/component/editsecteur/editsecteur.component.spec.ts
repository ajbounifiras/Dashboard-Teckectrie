import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsecteurComponent } from './editsecteur.component';

describe('EditsecteurComponent', () => {
  let component: EditsecteurComponent;
  let fixture: ComponentFixture<EditsecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
