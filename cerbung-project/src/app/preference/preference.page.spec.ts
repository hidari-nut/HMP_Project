import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreferencePage } from './preference.page';

describe('PreferencePage', () => {
  let component: PreferencePage;
  let fixture: ComponentFixture<PreferencePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
