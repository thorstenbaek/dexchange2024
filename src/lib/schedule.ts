import Day from './day';

export default class Schedule {
    days:Array<Day> = [];

    constructor(schedule: any) {
        console.log(schedule.days);

        for(let i = 0; i < schedule.days.length; i++) {
            this.days.push(new Day(schedule.days[i]));
        }
    }
}