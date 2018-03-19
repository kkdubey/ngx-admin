import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-issue-info',
  templateUrl: './issue-info.component.html',
  styleUrls: ['./issue-info.component.scss'],
})
export class IssueInfoComponent implements OnInit {

  @Input() issue_details: any;
  constructor() { }

  ngOnInit() {
  }

}
