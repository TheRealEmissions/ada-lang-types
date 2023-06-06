import { APIEmbed } from "discord.js";
export type EmbedData = APIEmbed & {
    content?: string;
};
export declare abstract class BaseLang implements IBaseLang {
    [key: string]: (...args: any) => EmbedData;
    static convertPlaceholders(content: string | undefined, placeholders: {
        [key: string]: string;
    }): string | undefined;
}
export interface IBaseLang {
    [key: string]: (...args: any) => EmbedData;
}
