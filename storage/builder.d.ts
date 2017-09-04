import { BrowserStorage } from './facades';
export declare type StorageType = 'volatile' | 'short' | 'long';
export declare function storageBuilder(type: StorageType): BrowserStorage;
