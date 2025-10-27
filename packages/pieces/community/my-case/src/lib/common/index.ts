import {
  httpClient,
  HttpMethod
} from '@activepieces/pieces-common';
import { PieceAuth } from '@activepieces/pieces-framework';
import { OAuth2GrantType } from '@activepieces/shared';
import { CreateCaseParams, CreateCaseResponse } from './types';

export const myCaseAuth = PieceAuth.OAuth2({
  description: 'MyCase OAuth',
  grantType: OAuth2GrantType.AUTHORIZATION_CODE,
  authUrl: 'https://auth.mycase.com/login_sessions/new',
  tokenUrl: 'https://auth.mycase.com/tokens',
  required: true,
  scope: [],
});

export const myCaseApi = {
  baseUrl: 'https://external-integrations.mycase.com/v1',
  endpoints: {
    cases: '/cases',
  },
  getAuthHeader: (access_token: string) => {
    return {
      Authorization: `Bearer ${access_token}`,
    };
  },
  createCase: async ({ access_token, ...caseParams }: CreateCaseParams) => {
    const response = await httpClient.sendRequest<CreateCaseResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.cases}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: caseParams,
    });
    return response.body;
  },
};

