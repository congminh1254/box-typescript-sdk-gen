import { BaseUrls } from './baseUrls.generated.js';
import { Interceptor } from './interceptors.generated.js';
import { Agent } from '../internal/utils.js';
import { AgentOptions } from '../internal/utils.js';
export declare class NetworkSession {
    readonly additionalHeaders: {
        readonly [key: string]: string;
    };
    readonly baseUrls: BaseUrls;
    readonly interceptors: readonly Interceptor[];
    readonly agent: Agent;
    readonly agentOptions?: AgentOptions;
    constructor(fields: Omit<NetworkSession, 'additionalHeaders' | 'baseUrls' | 'interceptors' | 'agent' | 'withAdditionalHeaders' | 'withCustomBaseUrls' | 'withCustomAgentOptions' | 'withInterceptors'> & Partial<Pick<NetworkSession, 'additionalHeaders' | 'baseUrls' | 'interceptors' | 'agent'>>);
    withAdditionalHeaders(additionalHeaders?: {
        readonly [key: string]: string;
    }): NetworkSession;
    withCustomBaseUrls(baseUrls: BaseUrls): NetworkSession;
    withCustomAgentOptions(agentOptions: AgentOptions): NetworkSession;
    withInterceptors(interceptors: readonly Interceptor[]): NetworkSession;
}
export interface NetworkSessionInput {
    readonly additionalHeaders?: {
        readonly [key: string]: string;
    };
    readonly baseUrls?: BaseUrls;
    readonly interceptors?: readonly Interceptor[];
    readonly agent?: Agent;
    readonly agentOptions?: AgentOptions;
}
