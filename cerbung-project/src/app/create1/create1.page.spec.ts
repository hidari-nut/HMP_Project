import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Create1Page } from './create1.page';

describe('Create1Page', () => {
  let component: Create1Page;
  let fixture: ComponentFixture<Create1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Create1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
