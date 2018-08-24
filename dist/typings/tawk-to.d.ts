import { UserDetails } from "./models";
import { TawkToService } from "./tawk-to-service";
export declare class TawkTo {
    private service;
    private element;
    accountId: string;
    widgetName: string;
    userDetails: UserDetails;
    constructor(service: TawkToService, element: Element);
    attached(): void;
    userDetailsChanged(newDetails: UserDetails): void;
}
