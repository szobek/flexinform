import { Call } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';


describe('Call', () => {
  let service: Call;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Call);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
