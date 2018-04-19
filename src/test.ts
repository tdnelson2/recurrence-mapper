import * as moment from 'moment/moment';
import { Moment }  from 'moment/moment';

import { Month } from './month';
import { mapMonthlyRecurrences } from './map-monthly-recurrences';

const start = moment();
const end = start.clone().subtract(200, 'days');
const period = 14;

const res = mapMonthlyRecurrences(start, end, period);
console.log(res);