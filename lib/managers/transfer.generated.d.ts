import { FolderFull } from '../schemas/folderFull.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class TransferOwnedFolderOptionals {
    readonly queryParams: TransferOwnedFolderQueryParams;
    readonly headers: TransferOwnedFolderHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<TransferOwnedFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<TransferOwnedFolderOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface TransferOwnedFolderOptionalsInput {
    readonly queryParams?: TransferOwnedFolderQueryParams;
    readonly headers?: TransferOwnedFolderHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface TransferOwnedFolderRequestBodyOwnedByField {
    readonly id: string;
}
export interface TransferOwnedFolderRequestBody {
    readonly ownedBy: TransferOwnedFolderRequestBodyOwnedByField;
}
export interface TransferOwnedFolderQueryParams {
    readonly fields?: readonly string[];
    readonly notify?: boolean;
}
export declare class TransferOwnedFolderHeaders {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<TransferOwnedFolderHeaders, 'extraHeaders'> & Partial<Pick<TransferOwnedFolderHeaders, 'extraHeaders'>>);
}
export interface TransferOwnedFolderHeadersInput {
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class TransferManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<TransferManager, 'networkSession' | 'transferOwnedFolder'> & Partial<Pick<TransferManager, 'networkSession'>>);
    transferOwnedFolder(userId: string, requestBody: TransferOwnedFolderRequestBody, optionalsInput?: TransferOwnedFolderOptionalsInput): Promise<FolderFull>;
}
export interface TransferManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeTransferOwnedFolderRequestBodyOwnedByField(val: TransferOwnedFolderRequestBodyOwnedByField): SerializedData;
export declare function deserializeTransferOwnedFolderRequestBodyOwnedByField(val: SerializedData): TransferOwnedFolderRequestBodyOwnedByField;
export declare function serializeTransferOwnedFolderRequestBody(val: TransferOwnedFolderRequestBody): SerializedData;
export declare function deserializeTransferOwnedFolderRequestBody(val: SerializedData): TransferOwnedFolderRequestBody;
