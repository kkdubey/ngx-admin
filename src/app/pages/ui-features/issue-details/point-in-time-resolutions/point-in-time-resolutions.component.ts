import { Component, OnInit, Input } from '@angular/core';
import { JobDataService } from '../../../../@core/data/job-data.service';

@Component({
  selector: 'ngx-point-in-time-resolutions',
  templateUrl: './point-in-time-resolutions.component.html',
  styleUrls: ['./point-in-time-resolutions.component.scss'],
})
export class PointInTimeResolutionsComponent implements OnInit {

  @Input() jobId: any;
  pointInTimeResolutions: any[] = [];

  constructor(private jobDataService: JobDataService) { }

  ngOnInit() {
    this.jobDataService.getPointInTimeResolutions(this.jobId).subscribe(
      res => {
        this.pointInTimeResolutions = res;
      },
      error => console.log(error)
    );
  }

}
