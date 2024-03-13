import moment from 'moment';

export default class Break {
    start: Date;
    end: Date;
    title: string;    
    day: Date;

    constructor(b: any, day: any, index: number) {
        this.day = moment(day.start, "YYYY-MM-DDTHH:mm").toDate();
        this.start = moment(b.start, "YYYY-MM-DDTHH:mm").toDate();
        this.end = moment(b.end, "YYYY-MM-DDTHH:mm").toDate();
        this.title = b.title;
    }
}