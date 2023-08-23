import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscoverDetailPage } from './discover-detail.page';

describe('DiscoverDetailPage', () => {
  let component: DiscoverDetailPage;
  let fixture: ComponentFixture<DiscoverDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiscoverDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
