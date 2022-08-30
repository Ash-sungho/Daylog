import {ko} from 'date-fns/locale';
import {format, formatDistanceToNow} from 'date-fns';

export const formatter = {
  /**
   *
   * @param {Date} date
   * @returns {string} 60초 미만은 방금전 반환, 60초이후 3일미만은 ~전 이런식으로 반환, 3일 이후는 날짜 시간반환
   */
  formatDate: date => {
    const d = new Date(date);
    const now = Date.now();
    const diff = (now - d.getTime()) / 1000;
    if (diff < 60 * 1) {
      return '방금 전';
    } else if (diff < 60 * 60 * 24 * 3) {
      return formatDistanceToNow(d, {addSuffix: true, locale: ko});
    } else {
      return format(d, 'PPP EEE p', {locale: ko});
    }
  },
  /**
   *
   * @param {string} text
   * @returns {string} 100글자 이하면 그대로 반환,100글자 이상이면 100글자 이후에 ...반환
   */

  truncate: text => {
    const replaced = text.replace('/\n/g', '');
    if (replaced.length <= 100) {
      return replaced;
    } else {
      return replaced.slice(0, 100).concat('...');
    }
  },
};
