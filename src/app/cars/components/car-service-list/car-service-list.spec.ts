import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarServiceList } from './car-service-list';

describe('CarServiceList', () => {
  let component: CarServiceList;
  let fixture: ComponentFixture<CarServiceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarServiceList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarServiceList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
