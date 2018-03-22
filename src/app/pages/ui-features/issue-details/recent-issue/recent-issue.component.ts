import { Component, OnInit, Input } from '@angular/core';
import { JobDataService } from '../../../../@core/data/job-data.service';

@Component({
  selector: 'ngx-recent-issue',
  templateUrl: './recent-issue.component.html',
  styleUrls: ['./recent-issue.component.scss'],
})
export class RecentIssueComponent implements OnInit {

  @Input() jobId: any;
  topResolutionsbyTimes: any[] = [];
  constructor(private jobDataService: JobDataService) { }

  ngOnInit() {
    this.jobDataService.getTopResolutionsByTime(this.jobId).subscribe(
      res => {
        this.topResolutionsbyTimes = res;
      },
      error => console.log(error)
    );
  }

}
