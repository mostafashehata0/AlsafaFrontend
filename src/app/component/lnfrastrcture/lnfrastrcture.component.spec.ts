import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LnfrastrctureComponent } from './lnfrastrcture.component';

describe('LnfrastrctureComponent', () => {
  let component: LnfrastrctureComponent;
  let fixture: ComponentFixture<LnfrastrctureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LnfrastrctureComponent]
    });
    fixture = TestBed.createComponent(LnfrastrctureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
