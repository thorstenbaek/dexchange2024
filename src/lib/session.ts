import moment from "moment";

export default class Session {
    startTime: Date;
    endTime: Date;
    title: string;    
    speaker: string;

    constructor(startTime: string, endTime: string, title: string, speaker: string) {
        this.startTime = moment(startTime, "YYYY-MM-DDTHH:mm:ss ZZ").toDate();    
        this.endTime = moment(endTime, "YYYY-MM-DDTHH:mm:ss ZZ").toDate(),
        this.title = title;
        this.speaker = speaker;
    }

    calculateHeight(): number {
        var test = this.endTime.getTime() - this.startTime.getTime();
        return test / 10000;
    }

    displayTime(): string {
        return moment(this.startTime).format("HH:mm");
    }
}

