import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzBuzzComponent } from './fuzz-buzz.component';

describe('FuzzBuzzComponent', () => {
  let component: FuzzBuzzComponent;
  let fixture: ComponentFixture<FuzzBuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuzzBuzzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuzzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
