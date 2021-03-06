import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss'],
})
export class IssueDetailsComponent implements OnInit {
  @Input() job: any = {};
  ticketDetails: any = {};

  constructor() { }

  ngOnInit() {
    this.ticketDetails = this.job.ticketDetails;
  }

}
