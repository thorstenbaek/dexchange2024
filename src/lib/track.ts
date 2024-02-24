import Session from "./session";

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
            this.sessions.push(
                new Session(                
                session.time,
                nextSession?.time,
                session.title,
                session.speaker));
        }
    }
}