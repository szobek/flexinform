import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCarList } from './client-car-list';

describe('ClientCarList', () => {
  let component: ClientCarList;
  let fixture: ComponentFixture<ClientCarList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCarList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCarList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
