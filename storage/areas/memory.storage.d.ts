import { Area } from './index';
export declare class MemoryStorage implements Area {
    memory: Map<string, string>;
    constructor();
    get(key: string): string | undefined;
    set(key: string, value: string): this;
}
