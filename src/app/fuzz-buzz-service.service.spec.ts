import { TestBed } from '@angular/core/testing';

import { FuzzBuzzServiceService } from './fuzz-buzz-service.service';

describe('FuzzBuzzServiceService', () => {
  let service: FuzzBuzzServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuzzBuzzServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe imprimir los numeros del 1 al 100', () => {
    expect(service.fuzzBuzz().length==100).toBeTruthy();
  });

  it('multiplo de 3 debe decir fuzz', () => {
    expect(service.fuzzBuzz().at(8)).toBe("Fuzz"); //0,1,2,3,4,5,6,7,8 8->9
  });

  it('multiplo de 5 debe decir Buzz', () => {
    expect(service.fuzzBuzz().at(4)).toBe("Buzz"); //0,1,2,3,4,5,6,7,8 4->5
  });

  it('multiplo de 5 y 3 debe decir FuzzBuzz', () => {
    expect(service.fuzzBuzz().at(14)).toBe("FuzzBuzz"); //0,1,2,3,4,5,6,7,8 14->15
  });


});
