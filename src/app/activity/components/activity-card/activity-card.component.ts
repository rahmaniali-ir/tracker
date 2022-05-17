import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Activity,
  ActivityPeriod,
  activityPeriodName,
} from '../../types/activity';

@Component({
  selector: 'activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.sass'],
})
export class ActivityCardComponent implements OnInit {
  @Input() activity: Activity = {
    id: '',
    name: '',
    period: ActivityPeriod.Daily,
    repetitions: 0,
    color: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  get hasName() {
    return this.activity.name.length > 0;
  }

  get name() {
    return this.activity.name || 'Activity';
  }

  get period() {
    return activityPeriodName[this.activity.period];
  }

  @HostListener('click')
  onClick() {
    this.router.navigate(['/activity/' + this.activity.id]);
  }
}
