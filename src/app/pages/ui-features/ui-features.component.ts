import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JobDataService } from '../../@core/data/job-data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ngx-ui-features',
  styleUrls: ['./ui-features.component.scss'],
  templateUrl: './ui-features.component.html',
})
export class UiFeaturesComponent implements OnInit {

  jobs: any[] = [];
  tabData = [];
  indexFrom: number = 1;
  indexTo: number = 50;

  throttle = 300;
  scrollDistance = 1;
  regions = ['fr', 'hk', 'sg', 'uk', 'us'];
  regionSelected = "";
  applications = ['qrs', 'arena'];
  applicationSelected = "";
  jobId = "";
  pollingStarted = false;
  ticketDetails: any = {};
  latestId: 0;

  expand: boolean = false;

  constructor(private elementRef: ElementRef,
    private jobDataService: JobDataService) { }

  ngOnInit() {
    this.getNextIssue();
  }

  onScrollDown() {
    this.indexFrom = this.indexFrom + 50;
    this.indexTo = this.indexTo + 50;
    this.getNextIssue();
  }

  getNextIssue() {
    this.jobDataService.getIssuesByRange(this.indexFrom, this.indexTo, this.applicationSelected, this.regionSelected, this.jobId).subscribe(
      res => {
        this.jobs = [...this.jobs, ...res];
        console.log(this.jobs);
        if (this.indexFrom == 1) {
          this.latestId = Math.max.apply(Math, this.jobs.map(function (o) { return o.IndexId; }));
        }
        this.startPollingForJobs();
      },
      error => console.log(error)
    );
  }

  filterJob() {
    this.indexFrom = 1;
    this.indexTo = 50;
    this.jobs = [];
    this.getNextIssue();
  }

  openTab(tab) {
    tab.new = false;
    tab.opened = true;
    const index = this.tabData.findIndex(function (e) { return e.IndexId == tab.IndexId; });
    if (index == -1) {
      this.jobDataService.getIssueDetails(tab.IndexId).subscribe(
        res => {
          tab.ticketDetails = res[0];
          this.tabData.push(tab);
          this.focusTab(tab);
        },
        error => console.log(error)
      );
    } else {
      this.focusTab(tab);
    }
  }

  private focusTab(tab) {
    setTimeout(() => {
      let elem = document.getElementById(tab.JobName + '-' + tab.IndexId);
      elem.click();
    }, 500);
  }
  closeTab(tab) {
    const index = this.tabData.findIndex(function (e) { return e.IndexId == tab.IndexId; });
    if (index > -1) {
      tab.opened = false;
      this.tabData.splice(index, 1);
    }
    return false;
  }

  OnExpand() {
    this.expand = !this.expand;
  }

  private startPollingForJobs() {
    if (!this.pollingStarted) {
      this.pollingStarted = true;
      this.startPollingForLatestIssue(12000)
        .subscribe(
          jobs => this.handleJobListViaPolling(jobs)
        );
    }
  }
  
  private handleJobListViaPolling(jobs: any[]) {
    if (jobs && jobs.length > 0) {
      jobs.forEach(function (obj) { obj.new = true; });
      this.jobs = jobs.concat(this.jobs)
      this.latestId = Math.max.apply(Math, jobs.map(function (o) { return o.IndexId; }));
    }
  }

  private startPollingForLatestIssue(refreshInterval: number): Observable<any[]> {
    if (!refreshInterval) {
      refreshInterval = 12000;
    }
    return Observable
      .interval(refreshInterval)
      .switchMap(
        () => {
          return this.jobDataService.getlatestIssues(this.latestId);
        });
  }
}
