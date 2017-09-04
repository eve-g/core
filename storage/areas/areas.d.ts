export interface Map<K, V> {
    get(key: K): V | undefined;
    set(key: K, value: V): this;
}
export interface Area {
}
export declare abstract class WebStorage implements Map<string, string> {
    windowStorage: Storage;
    get(key: string): string | undefined;
    set(key: string, value: string): this;
}
