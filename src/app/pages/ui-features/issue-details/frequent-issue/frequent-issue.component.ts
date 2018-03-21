import { Component, OnInit, Input } from '@angular/core';
import { JobDataService } from '../../../../@core/data/job-data.service';

@Component({
  selector: 'ngx-frequent-issue',
  templateUrl: './frequent-issue.component.html',
  styleUrls: ['./frequent-issue.component.scss'],
})
export class FrequentIssueComponent implements OnInit {

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
