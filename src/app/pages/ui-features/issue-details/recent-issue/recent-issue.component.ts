import { Component, OnInit, Input } from '@angular/core';
import { JobDataService } from '../../../../@core/data/job-data.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-recent-issue',
  templateUrl: './recent-issue.component.html',
  styleUrls: ['./recent-issue.component.scss'],
})
export class RecentIssueComponent implements OnInit {

  @Input() jobId: any;
  topResolutionsbyTimes: any[] = [];

  source: LocalDataSource = new LocalDataSource();
  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      Resolution: {
        title: 'Resolution',
        type: 'string',
      },
      Date: {
        title: 'Date',
        type: 'string',
      }
    },
  };

  constructor(private jobDataService: JobDataService) { }

  ngOnInit() {
    this.jobDataService.getTopResolutionsByTime(this.jobId).subscribe(
      res => {
        this.topResolutionsbyTimes = res;
        this.source.load(res);
      },
      error => console.log(error)
    );
  }

}
