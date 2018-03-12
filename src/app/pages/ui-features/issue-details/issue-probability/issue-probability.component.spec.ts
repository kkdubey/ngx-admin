import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueProbabilityComponent } from './issue-probability.component';

describe('IssueProbabilityComponent', () => {
  let component: IssueProbabilityComponent;
  let fixture: ComponentFixture<IssueProbabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueProbabilityComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueProbabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
