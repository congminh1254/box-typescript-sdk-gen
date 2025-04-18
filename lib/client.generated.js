"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxClient = void 0;
const authorization_generated_js_1 = require("./managers/authorization.generated.js");
const files_generated_js_1 = require("./managers/files.generated.js");
const trashedFiles_generated_js_1 = require("./managers/trashedFiles.generated.js");
const appItemAssociations_generated_js_1 = require("./managers/appItemAssociations.generated.js");
const downloads_generated_js_1 = require("./managers/downloads.generated.js");
const uploads_generated_js_1 = require("./managers/uploads.generated.js");
const chunkedUploads_generated_js_1 = require("./managers/chunkedUploads.generated.js");
const listCollaborations_generated_js_1 = require("./managers/listCollaborations.generated.js");
const comments_generated_js_1 = require("./managers/comments.generated.js");
const tasks_generated_js_1 = require("./managers/tasks.generated.js");
const fileVersions_generated_js_1 = require("./managers/fileVersions.generated.js");
const fileMetadata_generated_js_1 = require("./managers/fileMetadata.generated.js");
const fileClassifications_generated_js_1 = require("./managers/fileClassifications.generated.js");
const skills_generated_js_1 = require("./managers/skills.generated.js");
const fileWatermarks_generated_js_1 = require("./managers/fileWatermarks.generated.js");
const fileRequests_generated_js_1 = require("./managers/fileRequests.generated.js");
const folders_generated_js_1 = require("./managers/folders.generated.js");
const trashedFolders_generated_js_1 = require("./managers/trashedFolders.generated.js");
const folderMetadata_generated_js_1 = require("./managers/folderMetadata.generated.js");
const folderClassifications_generated_js_1 = require("./managers/folderClassifications.generated.js");
const trashedItems_generated_js_1 = require("./managers/trashedItems.generated.js");
const folderWatermarks_generated_js_1 = require("./managers/folderWatermarks.generated.js");
const folderLocks_generated_js_1 = require("./managers/folderLocks.generated.js");
const metadataTemplates_generated_js_1 = require("./managers/metadataTemplates.generated.js");
const classifications_generated_js_1 = require("./managers/classifications.generated.js");
const metadataCascadePolicies_generated_js_1 = require("./managers/metadataCascadePolicies.generated.js");
const search_generated_js_1 = require("./managers/search.generated.js");
const userCollaborations_generated_js_1 = require("./managers/userCollaborations.generated.js");
const taskAssignments_generated_js_1 = require("./managers/taskAssignments.generated.js");
const sharedLinksFiles_generated_js_1 = require("./managers/sharedLinksFiles.generated.js");
const sharedLinksFolders_generated_js_1 = require("./managers/sharedLinksFolders.generated.js");
const webLinks_generated_js_1 = require("./managers/webLinks.generated.js");
const trashedWebLinks_generated_js_1 = require("./managers/trashedWebLinks.generated.js");
const sharedLinksWebLinks_generated_js_1 = require("./managers/sharedLinksWebLinks.generated.js");
const sharedLinksAppItems_generated_js_1 = require("./managers/sharedLinksAppItems.generated.js");
const users_generated_js_1 = require("./managers/users.generated.js");
const sessionTermination_generated_js_1 = require("./managers/sessionTermination.generated.js");
const avatars_generated_js_1 = require("./managers/avatars.generated.js");
const transfer_generated_js_1 = require("./managers/transfer.generated.js");
const emailAliases_generated_js_1 = require("./managers/emailAliases.generated.js");
const memberships_generated_js_1 = require("./managers/memberships.generated.js");
const invites_generated_js_1 = require("./managers/invites.generated.js");
const groups_generated_js_1 = require("./managers/groups.generated.js");
const webhooks_generated_js_1 = require("./managers/webhooks.generated.js");
const events_generated_js_1 = require("./managers/events.generated.js");
const collections_generated_js_1 = require("./managers/collections.generated.js");
const recentItems_generated_js_1 = require("./managers/recentItems.generated.js");
const retentionPolicies_generated_js_1 = require("./managers/retentionPolicies.generated.js");
const retentionPolicyAssignments_generated_js_1 = require("./managers/retentionPolicyAssignments.generated.js");
const legalHoldPolicies_generated_js_1 = require("./managers/legalHoldPolicies.generated.js");
const legalHoldPolicyAssignments_generated_js_1 = require("./managers/legalHoldPolicyAssignments.generated.js");
const fileVersionRetentions_generated_js_1 = require("./managers/fileVersionRetentions.generated.js");
const fileVersionLegalHolds_generated_js_1 = require("./managers/fileVersionLegalHolds.generated.js");
const shieldInformationBarriers_generated_js_1 = require("./managers/shieldInformationBarriers.generated.js");
const shieldInformationBarrierReports_generated_js_1 = require("./managers/shieldInformationBarrierReports.generated.js");
const shieldInformationBarrierSegments_generated_js_1 = require("./managers/shieldInformationBarrierSegments.generated.js");
const shieldInformationBarrierSegmentMembers_generated_js_1 = require("./managers/shieldInformationBarrierSegmentMembers.generated.js");
const shieldInformationBarrierSegmentRestrictions_generated_js_1 = require("./managers/shieldInformationBarrierSegmentRestrictions.generated.js");
const devicePinners_generated_js_1 = require("./managers/devicePinners.generated.js");
const termsOfServices_generated_js_1 = require("./managers/termsOfServices.generated.js");
const termsOfServiceUserStatuses_generated_js_1 = require("./managers/termsOfServiceUserStatuses.generated.js");
const collaborationAllowlistEntries_generated_js_1 = require("./managers/collaborationAllowlistEntries.generated.js");
const collaborationAllowlistExemptTargets_generated_js_1 = require("./managers/collaborationAllowlistExemptTargets.generated.js");
const storagePolicies_generated_js_1 = require("./managers/storagePolicies.generated.js");
const storagePolicyAssignments_generated_js_1 = require("./managers/storagePolicyAssignments.generated.js");
const zipDownloads_generated_js_1 = require("./managers/zipDownloads.generated.js");
const signRequests_generated_js_1 = require("./managers/signRequests.generated.js");
const workflows_generated_js_1 = require("./managers/workflows.generated.js");
const signTemplates_generated_js_1 = require("./managers/signTemplates.generated.js");
const integrationMappings_generated_js_1 = require("./managers/integrationMappings.generated.js");
const ai_generated_js_1 = require("./managers/ai.generated.js");
const aiStudio_generated_js_1 = require("./managers/aiStudio.generated.js");
const docgenTemplate_generated_js_1 = require("./managers/docgenTemplate.generated.js");
const docgen_generated_js_1 = require("./managers/docgen.generated.js");
const network_generated_js_1 = require("./networking/network.generated.js");
const fetchOptions_generated_js_1 = require("./networking/fetchOptions.generated.js");
const baseUrls_generated_js_1 = require("./networking/baseUrls.generated.js");
class BoxClient {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({
            baseUrls: new baseUrls_generated_js_1.BaseUrls({}),
        });
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
        this.authorization = new authorization_generated_js_1.AuthorizationManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.files = new files_generated_js_1.FilesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.trashedFiles = new trashedFiles_generated_js_1.TrashedFilesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.appItemAssociations = new appItemAssociations_generated_js_1.AppItemAssociationsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.downloads = new downloads_generated_js_1.DownloadsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.uploads = new uploads_generated_js_1.UploadsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.chunkedUploads = new chunkedUploads_generated_js_1.ChunkedUploadsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.listCollaborations = new listCollaborations_generated_js_1.ListCollaborationsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.comments = new comments_generated_js_1.CommentsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.tasks = new tasks_generated_js_1.TasksManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.fileVersions = new fileVersions_generated_js_1.FileVersionsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.fileMetadata = new fileMetadata_generated_js_1.FileMetadataManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.fileClassifications = new fileClassifications_generated_js_1.FileClassificationsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.skills = new skills_generated_js_1.SkillsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.fileWatermarks = new fileWatermarks_generated_js_1.FileWatermarksManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.fileRequests = new fileRequests_generated_js_1.FileRequestsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.folders = new folders_generated_js_1.FoldersManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.trashedFolders = new trashedFolders_generated_js_1.TrashedFoldersManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.folderMetadata = new folderMetadata_generated_js_1.FolderMetadataManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.folderClassifications = new folderClassifications_generated_js_1.FolderClassificationsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.trashedItems = new trashedItems_generated_js_1.TrashedItemsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.folderWatermarks = new folderWatermarks_generated_js_1.FolderWatermarksManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.folderLocks = new folderLocks_generated_js_1.FolderLocksManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.metadataTemplates = new metadataTemplates_generated_js_1.MetadataTemplatesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.classifications = new classifications_generated_js_1.ClassificationsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.metadataCascadePolicies = new metadataCascadePolicies_generated_js_1.MetadataCascadePoliciesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.search = new search_generated_js_1.SearchManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.userCollaborations = new userCollaborations_generated_js_1.UserCollaborationsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.taskAssignments = new taskAssignments_generated_js_1.TaskAssignmentsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.sharedLinksFiles = new sharedLinksFiles_generated_js_1.SharedLinksFilesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.sharedLinksFolders = new sharedLinksFolders_generated_js_1.SharedLinksFoldersManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.webLinks = new webLinks_generated_js_1.WebLinksManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.trashedWebLinks = new trashedWebLinks_generated_js_1.TrashedWebLinksManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.sharedLinksWebLinks = new sharedLinksWebLinks_generated_js_1.SharedLinksWebLinksManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.sharedLinksAppItems = new sharedLinksAppItems_generated_js_1.SharedLinksAppItemsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.users = new users_generated_js_1.UsersManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.sessionTermination = new sessionTermination_generated_js_1.SessionTerminationManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.avatars = new avatars_generated_js_1.AvatarsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.transfer = new transfer_generated_js_1.TransferManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.emailAliases = new emailAliases_generated_js_1.EmailAliasesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.memberships = new memberships_generated_js_1.MembershipsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.invites = new invites_generated_js_1.InvitesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.groups = new groups_generated_js_1.GroupsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.webhooks = new webhooks_generated_js_1.WebhooksManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.events = new events_generated_js_1.EventsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.collections = new collections_generated_js_1.CollectionsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.recentItems = new recentItems_generated_js_1.RecentItemsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.retentionPolicies = new retentionPolicies_generated_js_1.RetentionPoliciesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.retentionPolicyAssignments = new retentionPolicyAssignments_generated_js_1.RetentionPolicyAssignmentsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.legalHoldPolicies = new legalHoldPolicies_generated_js_1.LegalHoldPoliciesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.legalHoldPolicyAssignments = new legalHoldPolicyAssignments_generated_js_1.LegalHoldPolicyAssignmentsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.fileVersionRetentions = new fileVersionRetentions_generated_js_1.FileVersionRetentionsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.fileVersionLegalHolds = new fileVersionLegalHolds_generated_js_1.FileVersionLegalHoldsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.shieldInformationBarriers = new shieldInformationBarriers_generated_js_1.ShieldInformationBarriersManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.shieldInformationBarrierReports =
            new shieldInformationBarrierReports_generated_js_1.ShieldInformationBarrierReportsManager({
                auth: this.auth,
                networkSession: this.networkSession,
            });
        this.shieldInformationBarrierSegments =
            new shieldInformationBarrierSegments_generated_js_1.ShieldInformationBarrierSegmentsManager({
                auth: this.auth,
                networkSession: this.networkSession,
            });
        this.shieldInformationBarrierSegmentMembers =
            new shieldInformationBarrierSegmentMembers_generated_js_1.ShieldInformationBarrierSegmentMembersManager({
                auth: this.auth,
                networkSession: this.networkSession,
            });
        this.shieldInformationBarrierSegmentRestrictions =
            new shieldInformationBarrierSegmentRestrictions_generated_js_1.ShieldInformationBarrierSegmentRestrictionsManager({
                auth: this.auth,
                networkSession: this.networkSession,
            });
        this.devicePinners = new devicePinners_generated_js_1.DevicePinnersManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.termsOfServices = new termsOfServices_generated_js_1.TermsOfServicesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.termsOfServiceUserStatuses = new termsOfServiceUserStatuses_generated_js_1.TermsOfServiceUserStatusesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.collaborationAllowlistEntries =
            new collaborationAllowlistEntries_generated_js_1.CollaborationAllowlistEntriesManager({
                auth: this.auth,
                networkSession: this.networkSession,
            });
        this.collaborationAllowlistExemptTargets =
            new collaborationAllowlistExemptTargets_generated_js_1.CollaborationAllowlistExemptTargetsManager({
                auth: this.auth,
                networkSession: this.networkSession,
            });
        this.storagePolicies = new storagePolicies_generated_js_1.StoragePoliciesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.storagePolicyAssignments = new storagePolicyAssignments_generated_js_1.StoragePolicyAssignmentsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.zipDownloads = new zipDownloads_generated_js_1.ZipDownloadsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.signRequests = new signRequests_generated_js_1.SignRequestsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.workflows = new workflows_generated_js_1.WorkflowsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.signTemplates = new signTemplates_generated_js_1.SignTemplatesManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.integrationMappings = new integrationMappings_generated_js_1.IntegrationMappingsManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.ai = new ai_generated_js_1.AiManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.aiStudio = new aiStudio_generated_js_1.AiStudioManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.docgenTemplate = new docgenTemplate_generated_js_1.DocgenTemplateManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
        this.docgen = new docgen_generated_js_1.DocgenManager({
            auth: this.auth,
            networkSession: this.networkSession,
        });
    }
    /**
     * Make a custom http request using the client authentication and network session.
     * @param {FetchOptionsInput} fetchOptionsInput Options to be passed to the fetch call
     * @returns {Promise<FetchResponse>}
     */
    makeRequest(fetchOptionsInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchOptions = new fetchOptions_generated_js_1.FetchOptions({
                url: fetchOptionsInput.url,
                method: fetchOptionsInput.method,
                params: fetchOptionsInput.params,
                headers: fetchOptionsInput.headers,
                data: fetchOptionsInput.data,
                fileStream: fetchOptionsInput.fileStream,
                multipartData: fetchOptionsInput.multipartData,
                contentType: fetchOptionsInput.contentType,
                responseFormat: fetchOptionsInput.responseFormat,
                auth: fetchOptionsInput.auth,
                networkSession: fetchOptionsInput.networkSession,
                cancellationToken: fetchOptionsInput.cancellationToken,
                followRedirects: fetchOptionsInput.followRedirects,
            });
            const auth = fetchOptions.auth == void 0 ? this.auth : fetchOptions.auth;
            const networkSession = fetchOptions.networkSession == void 0
                ? this.networkSession
                : fetchOptions.networkSession;
            const enrichedFetchOptions = new fetchOptions_generated_js_1.FetchOptions({
                auth: auth,
                networkSession: networkSession,
                url: fetchOptions.url,
                method: fetchOptions.method,
                params: fetchOptions.params,
                headers: fetchOptions.headers,
                data: fetchOptions.data,
                fileStream: fetchOptions.fileStream,
                multipartData: fetchOptions.multipartData,
                contentType: fetchOptions.contentType,
                responseFormat: fetchOptions.responseFormat,
                followRedirects: fetchOptions.followRedirects,
            });
            return yield networkSession.networkClient.fetch(enrichedFetchOptions);
        });
    }
    /**
     * Create a new client to impersonate user with the provided ID. All calls made with the new client will be made in context of the impersonated user, leaving the original client unmodified.
     * @param {string} userId ID of an user to impersonate
     * @returns {BoxClient}
     */
    withAsUserHeader(userId) {
        return new BoxClient({
            auth: this.auth,
            networkSession: this.networkSession.withAdditionalHeaders({
                ['As-User']: userId,
            }),
        });
    }
    /**
     * Create a new client with suppressed notifications. Calls made with the new client will not trigger email or webhook notifications
     * @returns {BoxClient}
     */
    withSuppressedNotifications() {
        return new BoxClient({
            auth: this.auth,
            networkSession: this.networkSession.withAdditionalHeaders({
                ['Box-Notifications']: 'off',
            }),
        });
    }
    /**
       * Create a new client with a custom set of headers that will be included in every API call
       * @param {{
          readonly [key: string]: string;
      }} extraHeaders Custom set of headers that will be included in every API call
       * @returns {BoxClient}
       */
    withExtraHeaders(extraHeaders = {}) {
        return new BoxClient({
            auth: this.auth,
            networkSession: this.networkSession.withAdditionalHeaders(extraHeaders),
        });
    }
    /**
     * Create a new client with a custom set of base urls that will be used for every API call
     * @param {BaseUrlsInput} baseUrlsInput Custom set of base urls that will be used for every API call
     * @returns {BoxClient}
     */
    withCustomBaseUrls(baseUrlsInput) {
        const baseUrls = new baseUrls_generated_js_1.BaseUrls({
            baseUrl: baseUrlsInput.baseUrl,
            uploadUrl: baseUrlsInput.uploadUrl,
            oauth2Url: baseUrlsInput.oauth2Url,
        });
        return new BoxClient({
            auth: this.auth,
            networkSession: this.networkSession.withCustomBaseUrls(baseUrls),
        });
    }
    /**
     * Create a new client with a custom proxy that will be used for every API call
     * @param {ProxyConfig} config
     * @returns {BoxClient}
     */
    withProxy(config) {
        return new BoxClient({
            auth: this.auth,
            networkSession: this.networkSession.withProxy(config),
        });
    }
    /**
     * Create a new client with a custom set of agent options that will be used for every API call
     * @param {AgentOptions} agentOptions Custom set of agent options that will be used for every API call
     * @returns {BoxClient}
     */
    withCustomAgentOptions(agentOptions) {
        return new BoxClient({
            auth: this.auth,
            networkSession: this.networkSession.withCustomAgentOptions(agentOptions),
        });
    }
    /**
     * Create a new client with a custom set of interceptors that will be used for every API call
     * @param {readonly Interceptor[]} interceptors Custom set of interceptors that will be used for every API call
     * @returns {BoxClient}
     */
    withInterceptors(interceptors) {
        return new BoxClient({
            auth: this.auth,
            networkSession: this.networkSession.withInterceptors(interceptors),
        });
    }
}
exports.BoxClient = BoxClient;
//# sourceMappingURL=client.generated.js.map