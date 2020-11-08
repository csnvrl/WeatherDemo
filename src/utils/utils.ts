import moment from 'moment';

export const timestampToFormattedString = (timestamp: number): string => {
  return moment(timestamp).format('DD/MM/YYYY HH:mm');
};
