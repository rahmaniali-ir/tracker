export enum ActivityPeriod {
  'Daily',
  'Weekly',
  'Monthly',
  'Yearly',
}

export const activityPeriodName = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

export interface Activity {
  id: string;
  name: string;
  repetitions: number;
  period: ActivityPeriod;
  color: string;
}

export type ActivityMap = {
  [key in string]: Activity;
};
