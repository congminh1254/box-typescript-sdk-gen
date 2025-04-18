import { SerializedData } from '../../serialization/json.js';
export type FileReferenceV2025R0TypeField = 'file';
export declare class FileReferenceV2025R0 {
    /**
     * `file` */
    readonly type: FileReferenceV2025R0TypeField;
    /**
     * ID of the object */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<FileReferenceV2025R0, 'type'> & Partial<Pick<FileReferenceV2025R0, 'type'>>);
}
export interface FileReferenceV2025R0Input {
    /**
     * `file` */
    readonly type?: FileReferenceV2025R0TypeField;
    /**
     * ID of the object */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export declare function serializeFileReferenceV2025R0TypeField(val: FileReferenceV2025R0TypeField): SerializedData;
export declare function deserializeFileReferenceV2025R0TypeField(val: SerializedData): FileReferenceV2025R0TypeField;
export declare function serializeFileReferenceV2025R0(val: FileReferenceV2025R0): SerializedData;
export declare function deserializeFileReferenceV2025R0(val: SerializedData): FileReferenceV2025R0;
export declare function serializeFileReferenceV2025R0Input(val: FileReferenceV2025R0Input): SerializedData;
export declare function deserializeFileReferenceV2025R0Input(val: SerializedData): FileReferenceV2025R0Input;
//# sourceMappingURL=fileReferenceV2025R0.generated.d.ts.map