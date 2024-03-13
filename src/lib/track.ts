import moment from "moment";
import SessionView from "./SessionView.svelte";

export default class Track {

    index: number;
    name: string;
    room: string;
    start: Date;
    end: Date;
    sessions: Array<any> = [];

    constructor(track: any, day: any, index: number) {
        this.start = moment(day.start, "YYYY-MM-DDTHH:mm").toDate();
        this.end = moment(day.end, "YYYY-MM-DDTHH:mm").toDate();
        this.index = index;
        this.name = track.name;
        this.room = track.room;
        
        if (track.sessions.length > 0) {
            
            for(let i = 0; i < track.sessions.length; i++) {
                const session = track.sessions[i];

                this.sessions.push(
                    {
                        component: SessionView, 
                        props: {
                            title: session.title, 
                            speaker: session.speaker, 
                            startTime: moment(session.start, "YYYY-MM-DDTHH:mm").toDate(),
                            endTime: moment(session.end, "YYYY-MM-DDTHH:mm").toDate(),
                            track: this,
                        }
                    });
                
            }
        }
    }
}