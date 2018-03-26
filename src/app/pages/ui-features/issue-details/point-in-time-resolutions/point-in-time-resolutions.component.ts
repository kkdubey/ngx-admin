import { Component, OnInit, Input } from '@angular/core';
import { JobDataService } from '../../../../@core/data/job-data.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-point-in-time-resolutions',
  templateUrl: './point-in-time-resolutions.component.html',
  styleUrls: ['./point-in-time-resolutions.component.scss'],
})
export class PointInTimeResolutionsComponent implements OnInit {

  @Input() jobId: any;
  pointInTimeResolutions: any[] = [];

  source: LocalDataSource = new LocalDataSource();
  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      Resolution: {
        title: 'Resolution',
        type: 'string',
      },
      DayofWeek: {
        title: 'Day of Week',
        type: 'string',
      },
      Timeslot: {
        title: 'Time slot',
        type: 'string',
      },
    },
  };
  constructor(private jobDataService: JobDataService) { }

  ngOnInit() {
    this.jobDataService.getPointInTimeResolutions(this.jobId).subscribe(
      res => {
        this.pointInTimeResolutions = res;
        this.source.load(res);
      },
      error => console.log(error)
    );
  }

}
