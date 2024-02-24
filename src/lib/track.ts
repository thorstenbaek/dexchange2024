import Session from "./session";
import Break from "./break";

export default class Track {

    startTime: string;
    name: string;
    room: string;
    sessions: Array<Session> = [];

    constructor(track: any, startTime: string) {
        this.startTime = startTime;
        this.name = track.name;
        this.room = track.room;

        for(let i = 0; i < track.sessions.length; i++) {
            const session = track.sessions[i];
            const nextSession = i < track.sessions.length - 1 ? track.sessions[i + 1] : null;
            
            var newSession = null;
            
            if (session.break) {
                newSession = new Break(                
                session.time,
                nextSession?.time,
                session.title);
            }
            else {
                newSession = new Session(                
                    session.time,
                    nextSession?.time,
                    session.title,
                    session.speaker);
            }

            this.sessions.push(
                newSession);
        }
    }
}