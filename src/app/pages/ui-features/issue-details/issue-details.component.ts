import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss'],
})
export class IssueDetailsComponent implements OnInit {
  @Input() ticketDetails: any;
  constructor(  ) { }

  ngOnInit() {
    console.log(this.ticketDetails);
  }

}
