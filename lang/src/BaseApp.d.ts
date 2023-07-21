import Base from "ada-file-design";
import { Dependency } from "ada-types";
import { JoinEventLang } from "../core/Welcome/events/join/JoinEventLang.js";
import Events from "ada-events-types";
declare abstract class BaseApp extends Base {
    constructor();
    private Welcome;
    getWelcomeLang(): {
        events: {
            join: JoinEventLang;
        };
    };
    type: Dependency;
    name: string;
    load: boolean;
    abstract init(): Promise<void>;
    static Events: typeof Events;
    getEvents(): import("ada-events-types/events/src/App.js").default;
    getDependencies(): Dependency[];
}
export default BaseApp;
