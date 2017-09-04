import { Area } from './areas';
import { Storage } from './index';
declare const LongStorage_base: new () => Storage & {
    area(): Area;
};
export declare class LongStorage extends LongStorage_base {
}
declare const ShortStorage_base: new () => Storage & {
    area(): Area;
};
export declare class ShortStorage extends ShortStorage_base {
}
declare const VolatileStorage_base: new () => Storage & {
    area(): Area;
};
export declare class VolatileStorage extends VolatileStorage_base {
}
