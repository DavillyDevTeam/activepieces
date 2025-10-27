import { httpClient, HttpMethod } from '@activepieces/pieces-common';
import { PieceAuth } from '@activepieces/pieces-framework';
import { OAuth2GrantType } from '@activepieces/shared';
import {
  CreateCaseParams,
  CreateCaseResponse,
} from './types';

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
  createCaseStage: async () => {},
  createCompany: async () => {},
  createCustomField: async () => {},
  createDocument: async () => {},
  createEvent: async () => {},
  createExpense: async () => {},
  createLead: async () => {},
  createLocation: async () => {},
  createNote: async () => {},
  createPerson: async () => {},
  createPracticeArea: async () => {},
  createReferralSource: async () => {},
  createTask: async () => {},
  createTimeEntry: async () => {},
  createCall: async () => {},
  updateCase: async () => {},
  updateCompany: async () => {},
  updatePerson: async () => {},
  listCases: async () => {},
  listCallers: async () => {},
  listCaseStages: async () => {},
  listCompanyContacts: async () => {},
  listLocations: async () => {},
  listPeopleGroups: async () => {},
  listPersonContacts: async () => {},
  listPracticeAreas: async () => {},
  listReferralSources: async () => {},
  listStaff: async () => {},
};
