import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ZipDownloadNameConflictsTypeField = 'file' | 'folder';
export interface ZipDownloadNameConflictsField {
  readonly id?: string;
  readonly type?: ZipDownloadNameConflictsTypeField;
  readonly originalName?: string;
  readonly downloadName?: string;
}
export interface ZipDownload {
  readonly downloadUrl?: string;
  readonly statusUrl?: string;
  readonly expiresAt?: DateTime;
  readonly nameConflicts?: readonly (readonly ZipDownloadNameConflictsField[])[];
}
export function serializeZipDownloadNameConflictsTypeField(
  val: ZipDownloadNameConflictsTypeField
): SerializedData {
  return val;
}
export function deserializeZipDownloadNameConflictsTypeField(
  val: SerializedData
): ZipDownloadNameConflictsTypeField {
  if (val == 'file') {
    return val;
  }
  if (val == 'folder') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize ZipDownloadNameConflictsTypeField",
  });
}
export function serializeZipDownloadNameConflictsField(
  val: ZipDownloadNameConflictsField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeZipDownloadNameConflictsTypeField(val.type),
    ['original_name']: val.originalName == void 0 ? void 0 : val.originalName,
    ['download_name']: val.downloadName == void 0 ? void 0 : val.downloadName,
  };
}
export function deserializeZipDownloadNameConflictsField(
  val: SerializedData
): ZipDownloadNameConflictsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ZipDownloadNameConflictsField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "ZipDownloadNameConflictsField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ZipDownloadNameConflictsTypeField =
    val.type == void 0
      ? void 0
      : deserializeZipDownloadNameConflictsTypeField(val.type);
  if (!(val.original_name == void 0) && !sdIsString(val.original_name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "original_name" of type "ZipDownloadNameConflictsField"',
    });
  }
  const originalName: undefined | string =
    val.original_name == void 0 ? void 0 : val.original_name;
  if (!(val.download_name == void 0) && !sdIsString(val.download_name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "download_name" of type "ZipDownloadNameConflictsField"',
    });
  }
  const downloadName: undefined | string =
    val.download_name == void 0 ? void 0 : val.download_name;
  return {
    id: id,
    type: type,
    originalName: originalName,
    downloadName: downloadName,
  } satisfies ZipDownloadNameConflictsField;
}
export function serializeZipDownload(val: ZipDownload): SerializedData {
  return {
    ['download_url']: val.downloadUrl == void 0 ? void 0 : val.downloadUrl,
    ['status_url']: val.statusUrl == void 0 ? void 0 : val.statusUrl,
    ['expires_at']:
      val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
    ['name_conflicts']:
      val.nameConflicts == void 0
        ? void 0
        : (val.nameConflicts.map(function (
            item: readonly ZipDownloadNameConflictsField[]
          ): SerializedData {
            return item.map(function (
              item: ZipDownloadNameConflictsField
            ): SerializedData {
              return serializeZipDownloadNameConflictsField(item);
            }) as readonly any[];
          }) as readonly any[]),
  };
}
export function deserializeZipDownload(val: SerializedData): ZipDownload {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "ZipDownload"' });
  }
  if (!(val.download_url == void 0) && !sdIsString(val.download_url)) {
    throw new BoxSdkError({
      message: 'Expecting string for "download_url" of type "ZipDownload"',
    });
  }
  const downloadUrl: undefined | string =
    val.download_url == void 0 ? void 0 : val.download_url;
  if (!(val.status_url == void 0) && !sdIsString(val.status_url)) {
    throw new BoxSdkError({
      message: 'Expecting string for "status_url" of type "ZipDownload"',
    });
  }
  const statusUrl: undefined | string =
    val.status_url == void 0 ? void 0 : val.status_url;
  if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "expires_at" of type "ZipDownload"',
    });
  }
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  if (!(val.name_conflicts == void 0) && !sdIsList(val.name_conflicts)) {
    throw new BoxSdkError({
      message: 'Expecting array for "name_conflicts" of type "ZipDownload"',
    });
  }
  const nameConflicts:
    | undefined
    | readonly (readonly ZipDownloadNameConflictsField[])[] =
    val.name_conflicts == void 0
      ? void 0
      : sdIsList(val.name_conflicts)
      ? (val.name_conflicts.map(function (
          itm: SerializedData
        ): readonly ZipDownloadNameConflictsField[] {
          return sdIsList(itm)
            ? (itm.map(function (
                itm: SerializedData
              ): ZipDownloadNameConflictsField {
                return deserializeZipDownloadNameConflictsField(itm);
              }) as readonly any[])
            : [];
        }) as readonly any[])
      : [];
  return {
    downloadUrl: downloadUrl,
    statusUrl: statusUrl,
    expiresAt: expiresAt,
    nameConflicts: nameConflicts,
  } satisfies ZipDownload;
}
