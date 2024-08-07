import { SignRequestBase } from './signRequestBase.generated.js';
import { FileBase } from './fileBase.generated.js';
import { SignRequestSigner } from './signRequestSigner.generated.js';
import { FileMini } from './fileMini.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type SignRequestTypeField = 'sign-request';
export type SignRequestStatusField = 'converting' | 'created' | 'sent' | 'viewed' | 'signed' | 'cancelled' | 'declined' | 'error_converting' | 'error_sending' | 'expired' | 'finalizing' | 'error_finalizing';
export interface SignRequestSignFilesField {
    readonly files?: readonly FileMini[];
    readonly isReadyForDownload?: boolean;
}
export type SignRequest = SignRequestBase & {
    readonly type?: SignRequestTypeField;
    readonly sourceFiles?: readonly FileBase[];
    readonly signers?: readonly SignRequestSigner[];
    readonly signatureColor?: string;
    readonly id?: string;
    readonly prepareUrl?: string;
    readonly signingLog?: FileMini;
    readonly status?: SignRequestStatusField;
    readonly signFiles?: SignRequestSignFilesField;
    readonly autoExpireAt?: DateTime;
    readonly parentFolder?: FolderMini;
};
export declare function serializeSignRequestTypeField(val: SignRequestTypeField): SerializedData;
export declare function deserializeSignRequestTypeField(val: SerializedData): SignRequestTypeField;
export declare function serializeSignRequestStatusField(val: SignRequestStatusField): SerializedData;
export declare function deserializeSignRequestStatusField(val: SerializedData): SignRequestStatusField;
export declare function serializeSignRequestSignFilesField(val: SignRequestSignFilesField): SerializedData;
export declare function deserializeSignRequestSignFilesField(val: SerializedData): SignRequestSignFilesField;
export declare function serializeSignRequest(val: SignRequest): SerializedData;
export declare function deserializeSignRequest(val: SerializedData): SignRequest;
