import * as moment from 'moment/moment';
import { Moment }  from 'moment/moment';

import { Month } from './month';
import { mapMonthlyRecurrences } from './map-monthly-recurrences';

const start = moment('2018-04-01','YYYY-MM-DD');
const end = start.clone().subtract(200, 'days');
const period = -1;

const res = mapMonthlyRecurrences(start, end, period);
console.log(res);