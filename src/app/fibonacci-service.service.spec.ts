import { TestBed } from '@angular/core/testing';

import { FibonacciServiceService } from './fibonacci-service.service';

describe('FibonacciServiceService', () => {
  let service: FibonacciServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FibonacciServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe ser par', () => {
    expect(service.esPar(4)).toBeTruthy();
  });

  it('no debe ser par', () => {
    expect(service.esPar(3)).toBeFalse();
  });

  it('esta en fibonacci', () => {
    expect(service.estaEnFibonacci(21)).toBeTruthy();
  });

  it('no esta en fibonacci', () => {
    expect(service.estaEnFibonacci(22)).toBeFalse();
  });
});
