import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ISSUE_ITEMS } from './issue-items';
@Component({
  selector: 'ngx-ui-features',
  styleUrls: ['./ui-features.component.scss'],
  templateUrl: './ui-features.component.html',
})
export class UiFeaturesComponent implements OnInit {

  menus = ISSUE_ITEMS;
  tabData = [];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }
  openTab(tab) {
    const index = this.tabData.findIndex(function (e) { return e.index == tab.index; });
    if (index == -1) {
      this.tabData.push(tab);
    }
    setTimeout(() => {
      let elem = document.getElementById(tab.issue_type + '-' + tab.index);
      elem.click();
    }, 500);
  }
  closeTab(tab) {
    const index = this.tabData.findIndex(function (e) { return e.index == tab.index; });
    if (index > -1) {
      this.tabData.splice(index, 1);
    }
    return false;
  }
}
