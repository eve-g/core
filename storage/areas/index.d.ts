export interface Map<K, V> {
    get(key: K): V | undefined;
    set(key: K, value: V): this;
}
export interface Area extends Map<string, string> {
}
