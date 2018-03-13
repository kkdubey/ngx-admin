import { Component, OnInit } from '@angular/core';

import { ISSUE_ITEMS } from './issue-items';
@Component({
  selector: 'ngx-ui-features',
  styleUrls: ['./ui-features.component.scss'],
  templateUrl: './ui-features.component.html',
})
export class UiFeaturesComponent implements OnInit {

  menus = ISSUE_ITEMS;
  tabData = [];

  constructor() { }

  ngOnInit() {
    // this.tabData.push({
    //   tabTitle: 'Simple Tab #1',
    // });
    // this.tabData.push({
    //   tabTitle: 'Simple Tab #2',
    // });
    // this.tabData.push({
    //   tabTitle: 'Simple Tab #3',
    // });
  }
  openTab(tab) {
    this.tabData.push(tab);
  }
}
