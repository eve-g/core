import { Area } from './index';
export declare abstract class WebStorage implements Area {
    windowStorage: Storage;
    get(key: string): string | undefined;
    set(key: string, value: string): this;
}
