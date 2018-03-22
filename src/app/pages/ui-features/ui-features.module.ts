import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ButtonsModule } from './buttons/buttons.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { ModalsComponent } from './modals/modals.component';
import { ModalComponent } from './modals/modal/modal.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { IssueInfoComponent } from './issue-details/issue-info/issue-info.component';
import { RecentIssueComponent } from './issue-details/recent-issue/recent-issue.component';
import { FrequentIssueComponent } from './issue-details/frequent-issue/frequent-issue.component';
import { IssueProbabilityComponent } from './issue-details/issue-probability/issue-probability.component';
import { TicketDashboardComponent } from './ticket-dashboard/ticket-dashboard.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ShortenDate } from './shorten-date.pipe';

const components = [
  UiFeaturesComponent,
  ModalsComponent,
  ModalComponent,
  IssueDetailsComponent,
  IssueInfoComponent,
  RecentIssueComponent,
  FrequentIssueComponent,
  IssueProbabilityComponent,
  TicketDashboardComponent,
  ShortenDate,
];

@NgModule({
  imports: [
    ThemeModule,
    UiFeaturesRoutingModule,
    ButtonsModule,
    InfiniteScrollModule,
   
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    ModalComponent,
  ],
  providers: [
  ],
})
export class UiFeaturesModule { }
