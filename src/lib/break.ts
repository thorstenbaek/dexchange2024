import Session from "./session"

export default class Break extends Session {

    constructor(startTime: string, endTime: string, title: string) {
        super(startTime, endTime, "Pause", "");
    }

    override calculateHeight(): number {
        return 35;
    }
}