import { Component, OnInit, Input } from '@angular/core';
import { JobDataService } from '../../../../@core/data/job-data.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-issue-probability',
  templateUrl: './issue-probability.component.html',
  styleUrls: ['./issue-probability.component.scss'],
})
export class IssueProbabilityComponent implements OnInit {

  @Input() jobId: any;
  topResolutions: any[] = [];

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
    this.jobDataService.getResolutions(this.jobId).subscribe(
      res => {
        this.topResolutions = res;
        console.log(res);
      },
      error => console.log(error)
    );
  }
}
