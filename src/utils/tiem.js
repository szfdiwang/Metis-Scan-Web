import dayJs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayJs.locale('zh-cn');
//转换为 ‘YYYY-MMM-DD HH:mm:ss’
const formatDate = (date, format) => {
    if (date) {
        return dayJs(date).format(format);
    }
    return '';
};
//时间格式转换为时间戳
const formatDates = (date, format) => {
    if (date) {
        return dayJs(date).format(format);
    }
    return '';
};
export {
    formatDate,
    formatDates
}