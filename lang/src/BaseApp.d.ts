import Base from "ts-modular-bot-file-design";
import { Dependency } from "ada-types";
import { JoinEventLang } from "../core/Welcome/events/join/JoinEventLang.js";
declare abstract class BaseApp extends Base {
    constructor();
    Welcome: {
        events: {
            join: JoinEventLang;
        };
    };
    type: Dependency;
    name: string;
    load: boolean;
    abstract init(): Promise<void>;
    getDependencies(): Dependency[];
}
export default BaseApp;
