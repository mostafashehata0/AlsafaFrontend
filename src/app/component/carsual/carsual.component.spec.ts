import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsualComponent } from './carsual.component';

describe('CarsualComponent', () => {
  let component: CarsualComponent;
  let fixture: ComponentFixture<CarsualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsualComponent]
    });
    fixture = TestBed.createComponent(CarsualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
