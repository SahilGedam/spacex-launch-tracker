import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingLaunches } from './upcoming-launches';

describe('UpcomingLaunches', () => {
  let component: UpcomingLaunches;
  let fixture: ComponentFixture<UpcomingLaunches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingLaunches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingLaunches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
