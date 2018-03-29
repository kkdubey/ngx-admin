import { Component, OnInit, Input } from '@angular/core';
import { JobDataService } from '../../../../@core/data/job-data.service';

@Component({
  selector: 'ngx-issue-probability',
  templateUrl: './issue-probability.component.html',
  styleUrls: ['./issue-probability.component.scss'],
})
export class IssueProbabilityComponent implements OnInit {

  @Input() jobId: any;
  topResolutions: any[] = [];

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
