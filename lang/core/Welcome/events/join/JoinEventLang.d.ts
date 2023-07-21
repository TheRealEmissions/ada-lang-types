import { BaseLang } from "../../../BaseLang.js";
export declare class JoinEventLang extends BaseLang {
    welcome(tag: string, username: string, discrim: string, memberNumber: string, memberNumberEnding: string, avatarUrl?: string): {
        author: {
            name: string;
        };
        description: string | undefined;
        thumbnail: {
            url: string;
        };
        placeholders: {
            tag: string;
            username: string;
            member_number: string;
            member_number_ending: string;
            discriminator: string;
            avatar_url: string;
        };
    };
}
