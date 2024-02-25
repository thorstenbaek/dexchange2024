import moment from "moment";

export default class Session {
    startTime: Date;
    endTime: Date;
    title: string;    
    speaker: string;

    constructor(startTime: Date, endTime: Date, title: string, speaker: string) {
        this.startTime = startTime;    
        this.endTime = endTime,
        this.title = title;
        this.speaker = speaker;
    }

    calculateHeight(): number {
        if (!this.endTime) {
            return 0;
        }
        
        var test = this.endTime.getTime() - this.startTime.getTime();
        return test / 10000;
    }

    displayTime(): string {
        return moment(this.startTime).format("HH:mm");
    }
}

