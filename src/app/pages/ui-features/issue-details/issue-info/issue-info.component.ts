import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-issue-info',
  templateUrl: './issue-info.component.html',
  styleUrls: ['./issue-info.component.scss'],
})
export class IssueInfoComponent implements OnInit {
   expand:boolean=false;

  @Input() jobId: any;
  @Input() ticketDetails: any = {};
  constructor() { }

  ngOnInit() {
  }

  OnExpandview(){
    this.expand=!this.expand;

  }

}
