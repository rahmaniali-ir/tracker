import { Injectable } from '@angular/core';
import { ActivityMap, ActivityPeriod } from '../types/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  activities: ActivityMap = {
    '1': {
      id: '1',
      name: 'Activity 1',
      period: ActivityPeriod.Daily,
      repetitions: 1,
      color: '#fe3e26',
    },
    '2': {
      id: '2',
      name: 'Activity 2',
      period: ActivityPeriod.Weekly,
      repetitions: 2,
      color: '#3de1ff',
    },
    '3': {
      id: '3',
      name: 'Activity 3',
      period: ActivityPeriod.Weekly,
      repetitions: 2,
      color: '#57f098',
    },
    '4': {
      id: '4',
      name: 'Activity 4',
      period: ActivityPeriod.Weekly,
      repetitions: 2,
      color: '#f7be26',
    },
  };

  constructor() {}

  get activitiesArray() {
    return Object.keys(this.activities).map((id) => this.activities[id]);
  }

  addActivity() {
    const id = Math.random();

    this.activities[id] = {
      id: String(id),
      name: '',
      color: 'var(--text-secondary)',
      period: ActivityPeriod.Daily,
      repetitions: 0,
    };
  }
}
