import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { RouterModule } from '@angular/router';
import { ActivityViewComponent } from './components/activity-view/activity-view.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ActivitiesComponent,
    ActivityCardComponent,
    ActivityViewComponent,
  ],
  imports: [CommonModule, RouterModule, IconModule],
})
export class ActivityModule {}
