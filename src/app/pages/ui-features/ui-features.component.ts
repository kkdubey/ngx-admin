import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JobDataService } from '../../@core/data/job-data.service';

import { ISSUE_ITEMS } from './issue-items';
@Component({
  selector: 'ngx-ui-features',
  styleUrls: ['./ui-features.component.scss'],
  templateUrl: './ui-features.component.html',
})
export class UiFeaturesComponent implements OnInit {

  menus = ISSUE_ITEMS;
  jobs: any[] = [];
  tabData = [];
  indexFrom: number = 1;
  indexTo: number = 20;

  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;

  constructor(private elementRef: ElementRef,
    private jobDataService: JobDataService) { }

  ngOnInit() {
    this.getNextIssue();
  }

  onScrollDown() {
    this.indexFrom = this.indexFrom + 20;
    this.indexTo = this.indexTo + 20;
    this.getNextIssue();
  }

  getNextIssue() {
    this.jobDataService.getIssuesByRange(this.indexFrom, this.indexTo).subscribe(
      res => {
        this.jobs = [...this.jobs, ...res];
        console.log(this.jobs);
      },
      error => console.log(error)
    );
  }
  openTab(tab) {
    const index = this.tabData.findIndex(function (e) { return e.IndexId == tab.IndexId; });
    if (index == -1) {
      this.tabData.push(tab);
    }
    setTimeout(() => {
      let elem = document.getElementById(tab.JobName + '-' + tab.IndexId);
      elem.click();
    }, 500);
  }

  closeTab(tab) {
    const index = this.tabData.findIndex(function (e) { return e.IndexId == tab.IndexId; });
    if (index > -1) {
      this.tabData.splice(index, 1);
    }
    return false;
  }
}
