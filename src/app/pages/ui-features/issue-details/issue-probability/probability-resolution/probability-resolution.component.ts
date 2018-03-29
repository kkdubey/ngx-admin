import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-probability-resolution',
  templateUrl: './probability-resolution.component.html',
  styleUrls: ['./probability-resolution.component.scss'],
})
export class ProbabilityResolutionComponent implements OnInit {

  @Input() resolutions: any[];

  _resolutions: any[] = [];

  source: LocalDataSource = new LocalDataSource();
  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      Resolution: {
        title: 'Resolution',
        type: 'string',
      }
    },
  };

  constructor() { }

  ngOnInit() {
    this.resolutions.forEach(element => {
      const resolution = { Resolution: element };
      this._resolutions.push(resolution)
    });
    this.source.load(this._resolutions);
  }

}
