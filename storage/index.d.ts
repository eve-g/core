export declare type Storage = {
    clear(): void;
    get(key: string): string | null;
    key(index: number): string | null;
    readonly length: number;
    remove(key: string): void;
    set(key: string, data: string): void;
    [index: number]: string;
    [key: string]: any;
};
export declare abstract class StorageBase implements Storage {
    clear(): void;
    get(key: string): string | null;
    key(index: number): string | null;
    length: number;
    remove(key: string): void;
    set(key: string, data: string): void;
    [index: number]: string;
}
