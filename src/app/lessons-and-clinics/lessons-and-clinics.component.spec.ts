/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LessonsAndClinicsComponent } from './lessons-and-clinics.component';

describe('LessonsAndClinicsComponent', () => {
  let component: LessonsAndClinicsComponent;
  let fixture: ComponentFixture<LessonsAndClinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsAndClinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsAndClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
