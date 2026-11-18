import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseriItem } from './useri-item';

describe('UseriItem', () => {
  let component: UseriItem;
  let fixture: ComponentFixture<UseriItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseriItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseriItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
