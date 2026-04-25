/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MusicanCardComponent } from './musican-card.component';

describe('MusicanCardComponent', () => {
  let component: MusicanCardComponent;
  let fixture: ComponentFixture<MusicanCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicanCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
