import moment from "moment";
import Track from "./track";
import Break from "./break";

export default class Day {
    tracks: Array<Track> = [];
    breaks: Array<Break> = [];
    start: Date;
    end: Date;

    constructor(day: any) {
        this.start = moment(day.start, "YYYY-MM-DDTHH:mm").toDate();
        this.end = moment(day.end, "YYYY-MM-DDTHH:mm").toDate();

        for(let i = 0; i < day.tracks.length; i++) {
            this.tracks.push(new Track(day.tracks[i], this, i));
        }    

        for(let i = 0; i < day.breaks.length; i++) {
            this.breaks.push(new Break(day.breaks[i], this));
        }    
    }
}