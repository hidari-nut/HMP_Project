import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountviewPage } from './accountview.page';

describe('AccountviewPage', () => {
  let component: AccountviewPage;
  let fixture: ComponentFixture<AccountviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccountviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
