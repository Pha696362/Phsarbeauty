import moment from 'moment';

export function toMidDate(Date: Date) {
	return moment(Date).format('MMM Do YYYY');
}
