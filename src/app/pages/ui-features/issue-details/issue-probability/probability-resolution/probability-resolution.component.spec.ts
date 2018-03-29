import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilityResolutionComponent } from './probability-resolution.component';

describe('RecentIssueComponent', () => {
  let component: ProbabilityResolutionComponent;
  let fixture: ComponentFixture<ProbabilityResolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbabilityResolutionComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbabilityResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
