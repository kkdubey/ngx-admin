import { Component, OnInit, Input } from '@angular/core';
import { JobDataService } from '../../../../@core/data/job-data.service';

@Component({
  selector: 'ngx-issue-probability',
  templateUrl: './issue-probability.component.html',
  styleUrls: ['./issue-probability.component.scss'],
})
export class IssueProbabilityComponent implements OnInit {

  @Input() jobId: any;
  topResolutionsbyFrequencies: any[] = [];

  constructor(private jobDataService: JobDataService) { }

  ngOnInit() {
    this.jobDataService.getTopResolutionsbyFrequency(this.jobId).subscribe(
      res => {
        this.topResolutionsbyFrequencies = res;
      },
      error => console.log(error)
    );
  }

}
