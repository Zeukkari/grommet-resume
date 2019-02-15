import moment from 'moment'

export function formatDate(date) {
  return moment(date, 'YYYY-MM-DD').format('MMM YYYY')
}
