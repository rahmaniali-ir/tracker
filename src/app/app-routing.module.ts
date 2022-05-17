import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityViewComponent } from './activity/components/activity-view/activity-view.component';
import { DashboardComponent } from './activity/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'activity/:id',
        component: ActivityViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
