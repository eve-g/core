import { StorageType } from './builder';
import { Storage } from './index';
export interface Injectable {
    storage(): Storage;
}
export declare function storageFactory(injectable: Injectable): Storage;
export declare function storageRegister(injectable: Injectable, type: StorageType): void;
