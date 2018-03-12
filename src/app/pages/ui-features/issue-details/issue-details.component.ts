import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'ngx-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss'],
})
export class IssueDetailsComponent implements OnInit {

  constructor(
    // private route: ActivatedRoute,
    // private router: Router
  ) { }

  ngOnInit() {
    // const issueId =  this.route.snapshot.params['issueId'];
    // this.newMethod(issueId);
    // console.log(issueId);
    // console.log(this.router);
    // console.log(this.route);
  }

}
