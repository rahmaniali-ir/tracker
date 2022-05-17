import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from '../../services/activity.service';
import { ActivityPeriod, activityPeriodName } from '../../types/activity';

@Component({
  selector: 'activity-view',
  templateUrl: './activity-view.component.html',
  styleUrls: ['./activity-view.component.sass'],
})
export class ActivityViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activityService: ActivityService
  ) {}

  ngOnInit(): void {
    const exists = this.activityId in this.activityService.activities;

    if (!exists) {
      this.router.navigate(['/']);
    }
  }

  get activityId() {
    return this.route.snapshot.params['id'];
  }

  get activity() {
    return this.activityService.activities[this.activityId];
  }

  get name() {
    return this.activity?.name || '';
  }

  get color() {
    return this.activity?.color || 'var(--text-secondary)';
  }

  get period() {
    return activityPeriodName[this.activity?.period || ActivityPeriod.Daily];
  }

  onNameInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.activity.name = target.value;
  }
}
