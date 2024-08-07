import { SignRequestBase } from './signRequestBase.generated.js';
import { FileBase } from './fileBase.generated.js';
import { SignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type SignRequestCreateRequestSignatureColorField = 'blue' | 'black' | 'red';
export type SignRequestCreateRequest = SignRequestBase & {
    readonly sourceFiles?: readonly FileBase[];
    readonly signatureColor?: SignRequestCreateRequestSignatureColorField;
    readonly signers: readonly SignRequestCreateSigner[];
    readonly parentFolder?: FolderMini;
};
export declare function serializeSignRequestCreateRequestSignatureColorField(val: SignRequestCreateRequestSignatureColorField): SerializedData;
export declare function deserializeSignRequestCreateRequestSignatureColorField(val: SerializedData): SignRequestCreateRequestSignatureColorField;
export declare function serializeSignRequestCreateRequest(val: SignRequestCreateRequest): SerializedData;
export declare function deserializeSignRequestCreateRequest(val: SerializedData): SignRequestCreateRequest;
