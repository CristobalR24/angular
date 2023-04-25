import { TestBed } from '@angular/core/testing';

import { AnagramaServiceService } from './anagrama-service.service';

describe('AnagramaServiceService', () => {
  let service: AnagramaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnagramaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('No deben ser las mismas palabras', () => {
    expect(service.anagrama("Jueves","jueves")).toBeFalse();
  });
  
  it('Deben tener la misma cantidad de letras', () => {
    expect(service.anagrama("palanca","pala")).toBeFalse();
  });

  it('Debe ser un anagrama', () => {
    expect(service.anagrama("Roma","amor")).toBeTrue();
  });

  it('No debe ser un anagrama', () => {
    expect(service.anagrama("Jabon","japon")).toBeFalse();
  });


});
