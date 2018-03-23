import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointInTimeResolutionsComponent } from './point-in-time-resolutions.component';

describe('FrequentIssueComponent', () => {
  let component: PointInTimeResolutionsComponent;
  let fixture: ComponentFixture<PointInTimeResolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointInTimeResolutionsComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointInTimeResolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
