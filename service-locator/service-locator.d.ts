export interface Service {
}
export interface Locator {
    [name: string]: Service | Literal;
}
export declare type Literal = string | number | (string | number)[];
export declare type InheritedServiceLocator<T extends ServiceLocator> = T & any;
declare const ServiceLocator_base: {
    new (): {
        [name: string]: string | number | (string | number)[] | Service;
    };
};
export declare abstract class ServiceLocator extends ServiceLocator_base {
    static load<T extends ServiceLocator>(locator: T): void;
    static locator<T extends ServiceLocator>(this: {
        new (...services: (Literal | Service)[]): T;
        sole: ServiceLocator & T;
    }): T;
    static sole: InheritedServiceLocator<ServiceLocator>;
}
