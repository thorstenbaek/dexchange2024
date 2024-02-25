import moment from "moment";
import SessionView from "./SessionView.svelte";
import BreakView from "./BreakView.svelte";
import SpacerView from "./SpacerView.svelte";

export default class Track {

    startTime: Date;
    name: string;
    room: string;
    sessions: Array<any> = [];

    constructor(track: any, startTime: string) {
        this.startTime =  moment(startTime, "YYYY-MM-DDTHH:mm:ss ZZ").toDate();    
        this.name = track.name;
        this.room = track.room;

        if (track.sessions.length > 0) {
            const endTime = moment(track.sessions[0].time, "YYYY-MM-DDTHH:mm:ss ZZ").toDate();    

            this.sessions.push({component: SpacerView, props: {startTime: this.startTime, endTime: endTime}});

            for(let i = 0; i < track.sessions.length; i++) {
                const thisSession = track.sessions[i];
                const nextSession = i < track.sessions.length - 1 ? track.sessions[i + 1] : null;            

                const thisTime: Date = moment(thisSession.time, "YYYY-MM-DDTHH:mm:ss ZZ").toDate();
                const nextTime: any = nextSession ? moment(nextSession.time, "YYYY-MM-DDTHH:mm:ss ZZ").toDate() : null;
                
                if (thisSession.break) {
                    this.sessions.push(
                        {
                            component: BreakView, 
                            props: {title: thisSession.title, startTime: thisTime, endTime: nextTime}
                        });
                }
                else {                    
                    this.sessions.push(
                        {
                            component: SessionView, 
                            props: {title: thisSession.title, speaker: thisSession.speaker, startTime: thisTime, endTime: nextTime}
                        });
                }
            }
        }
    }
}