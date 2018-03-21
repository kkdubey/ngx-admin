import { Component, OnInit, Input } from '@angular/core';
import { JobDataService } from '../../../@core/data/job-data.service';

@Component({
  selector: 'ngx-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss'],
})
export class IssueDetailsComponent implements OnInit {
  @Input() job: any = {};
  ticketDetails: any = {};

  constructor(private jobDataService: JobDataService) { }

  ngOnInit() {

    this.jobDataService.getIssueDetails(this.job.IndexId).subscribe(
      res => {
        this.ticketDetails = res[0];
        console.log(res);
      },
      error => console.log(error)
    );
  }

}
