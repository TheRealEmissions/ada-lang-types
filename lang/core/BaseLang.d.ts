import { APIEmbed } from "discord.js";
export type EmbedData = APIEmbed & {
    content?: string;
    placeholders?: {
        [key: string]: string;
    };
};
export declare abstract class BaseLang implements IBaseLang {
    [key: string]: (...args: any) => EmbedData;
    private static convertPlaceholders;
    static convertAllPlaceholders(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
    private static convertEmbedPlaceholders;
}
export interface IBaseLang {
    [key: string]: (...args: any) => EmbedData;
}
