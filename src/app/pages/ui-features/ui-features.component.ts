import { Component } from '@angular/core';

import { ISSUE_ITEMS } from './issue-items';
@Component({
  selector: 'ngx-ui-features',
  template: `
  <div class="row">
    <div class="col-md-2">
      <nb-menu [items]="menu"></nb-menu>
    </div>
    <div class="col-md-10">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class UiFeaturesComponent {
  
  menu = ISSUE_ITEMS;
}
