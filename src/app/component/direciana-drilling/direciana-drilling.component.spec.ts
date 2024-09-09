import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecianaDrillingComponent } from './direciana-drilling.component';

describe('DirecianaDrillingComponent', () => {
  let component: DirecianaDrillingComponent;
  let fixture: ComponentFixture<DirecianaDrillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirecianaDrillingComponent]
    });
    fixture = TestBed.createComponent(DirecianaDrillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
