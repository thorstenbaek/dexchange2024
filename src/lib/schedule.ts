import Day from './day';

export default class Schedule {
    days:Array<Day> = [];

    constructor(schedule: any) {
        for(let i = 0; i < schedule.days.length; i++) {
            this.days.push(new Day(schedule.days[i]));
        }
    }
}