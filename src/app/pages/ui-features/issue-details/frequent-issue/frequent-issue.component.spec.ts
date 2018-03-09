import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentIssueComponent } from './frequent-issue.component';

describe('FrequentIssueComponent', () => {
  let component: FrequentIssueComponent;
  let fixture: ComponentFixture<FrequentIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
