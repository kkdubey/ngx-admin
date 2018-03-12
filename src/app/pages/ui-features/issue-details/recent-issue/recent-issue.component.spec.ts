import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentIssueComponent } from './recent-issue.component';

describe('RecentIssueComponent', () => {
  let component: RecentIssueComponent;
  let fixture: ComponentFixture<RecentIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentIssueComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
