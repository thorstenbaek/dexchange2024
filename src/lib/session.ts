import moment from "moment";
import Track from "./track";

let sessionCounter: number = 0;

export default class Session {
    id: number;
    title: string;
    speaker: string;
    description: string;
    start: Date;
    end: Date;
    track: Track;
    constructor(session: any, track: Track) {
        this.id = sessionCounter++;

        this.title = session.title;
        this.speaker = session.speaker;
        this.description = session.description;
        this.start = moment(session.start, "YYYY-MM-DDTHH:mm").toDate(),
        this.end = moment(session.end, "YYYY-MM-DDTHH:mm").toDate(),
        this.track = track;
    }
}