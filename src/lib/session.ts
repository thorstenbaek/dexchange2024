import moment from "moment";
import Track from "./track";

export default class Session {
    title: string;
    speaker: string;
    description: string;
    start: Date;
    end: Date;
    track: Track;
    constructor(session: any, track: Track) {
        this.title = session.title;
        this.speaker = session.speaker;
        this.description = session.description;
        this.start = moment(session.start, "YYYY-MM-DDTHH:mm").toDate(),
        this.end = moment(session.end, "YYYY-MM-DDTHH:mm").toDate(),
        this.track = track;
    }
}