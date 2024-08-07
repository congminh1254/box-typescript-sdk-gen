import { Event } from './event.generated.js';
import { SerializedData } from '../serialization/json.js';
export type EventsNextStreamPositionField = string | number;
export interface Events {
    readonly chunkSize?: number;
    readonly nextStreamPosition?: EventsNextStreamPositionField;
    readonly entries?: readonly Event[];
}
export declare function serializeEventsNextStreamPositionField(val: any): SerializedData;
export declare function deserializeEventsNextStreamPositionField(val: SerializedData): EventsNextStreamPositionField;
export declare function serializeEvents(val: Events): SerializedData;
export declare function deserializeEvents(val: SerializedData): Events;
