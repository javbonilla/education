import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInputComponent } from './person-input.component';

describe('PersonInputComponent', () => {
  let component: PersonInputComponent;
  let fixture: ComponentFixture<PersonInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonInputComponent]
    });
    fixture = TestBed.createComponent(PersonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
