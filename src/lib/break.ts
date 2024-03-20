import moment from 'moment';
import Day from './day';

export default class Break {
    start: Date;
    end: Date;
    title: string;    
    day: Day;

    constructor(b: any, day: Day) {
        this.day = day;
        this.start = moment(b.start, "YYYY-MM-DDTHH:mm").toDate();
        this.end = moment(b.end, "YYYY-MM-DDTHH:mm").toDate();
        this.title = b.title;
    }
}