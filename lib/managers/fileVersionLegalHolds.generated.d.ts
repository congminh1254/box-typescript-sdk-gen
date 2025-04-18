import { FileVersionLegalHold } from '../schemas/fileVersionLegalHold.generated.js';
import { FileVersionLegalHolds } from '../schemas/fileVersionLegalHolds.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetFileVersionLegalHoldByIdOptionals {
    readonly headers: GetFileVersionLegalHoldByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileVersionLegalHoldByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileVersionLegalHoldByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileVersionLegalHoldByIdOptionalsInput {
    readonly headers?: GetFileVersionLegalHoldByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileVersionLegalHoldsOptionals {
    readonly headers: GetFileVersionLegalHoldsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileVersionLegalHoldsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileVersionLegalHoldsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileVersionLegalHoldsOptionalsInput {
    readonly headers?: GetFileVersionLegalHoldsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFileVersionLegalHoldByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionLegalHoldByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionLegalHoldByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionLegalHoldByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetFileVersionLegalHoldsQueryParams {
    /**
     * The ID of the legal hold policy to get the file version legal
     * holds for. */
    readonly policyId: string;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
}
export declare class GetFileVersionLegalHoldsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionLegalHoldsHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionLegalHoldsHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionLegalHoldsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileVersionLegalHoldsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileVersionLegalHoldsManager, 'networkSession' | 'getFileVersionLegalHoldById' | 'getFileVersionLegalHolds'> & Partial<Pick<FileVersionLegalHoldsManager, 'networkSession'>>);
    /**
       * Retrieves information about the legal hold policies
       * assigned to a file version.
       * @param {string} fileVersionLegalHoldId The ID of the file version legal hold
      Example: "2348213"
       * @param {GetFileVersionLegalHoldByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileVersionLegalHold>}
       */
    getFileVersionLegalHoldById(fileVersionLegalHoldId: string, optionalsInput?: GetFileVersionLegalHoldByIdOptionalsInput): Promise<FileVersionLegalHold>;
    /**
     * Get a list of file versions on legal hold for a legal hold
     * assignment.
     *
     * Due to ongoing re-architecture efforts this API might not return all file
     * versions for this policy ID.
     *
     * Instead, this API will only return file versions held in the legacy
     * architecture. Two new endpoints will available to request any file versions
     * held in the new architecture.
     *
     * For file versions held in the new architecture, the `GET
     * /legal_hold_policy_assignments/:id/file_versions_on_hold` API can be used to
     * return all past file versions available for this policy assignment, and the
     * `GET /legal_hold_policy_assignments/:id/files_on_hold` API can be used to
     * return any current (latest) versions of a file under legal hold.
     *
     * The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
     * find a list of policy assignments for a given policy ID.
     *
     * Once the re-architecture is completed this API will be deprecated.
     * @param {GetFileVersionLegalHoldsQueryParams} queryParams Query parameters of getFileVersionLegalHolds method
     * @param {GetFileVersionLegalHoldsOptionalsInput} optionalsInput
     * @returns {Promise<FileVersionLegalHolds>}
     */
    getFileVersionLegalHolds(queryParams: GetFileVersionLegalHoldsQueryParams, optionalsInput?: GetFileVersionLegalHoldsOptionalsInput): Promise<FileVersionLegalHolds>;
}
export interface FileVersionLegalHoldsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
//# sourceMappingURL=fileVersionLegalHolds.generated.d.ts.map