import moment from "moment";
import SessionView from "./SessionView.svelte";
import Day from "./day";

export default class Track {

    index: number;
    name: string;
    room: string;
    day: Day;
    sessions: Array<any> = [];

    constructor(track: any, day: Day, index: number) {
        this.day = day;
        this.index = index;
        this.name = track.name;
        this.room = track.room;
        
        for(let i = 0; i < track.sessions?.length; i++) {
            const session = track.sessions[i];

            this.sessions.push(
                {
                    component: SessionView, 
                    props: {
                        title: session.title, 
                        speaker: session.speaker, 
                        description: session.description,
                        startTime: moment(session.start, "YYYY-MM-DDTHH:mm").toDate(),
                        endTime: moment(session.end, "YYYY-MM-DDTHH:mm").toDate(),
                        track: this,
                    }
                });
            
        }
    }
}