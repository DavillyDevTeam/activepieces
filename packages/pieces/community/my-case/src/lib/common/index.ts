import { httpClient, HttpMethod } from '@activepieces/pieces-common';
import { PieceAuth } from '@activepieces/pieces-framework';
import { OAuth2GrantType } from '@activepieces/shared';
import {
  CreateCallParams,
  CreateCaseDocumentParams,
  CreateCaseParams,
  CreateCaseResponse,
  CreateCaseStageParams,
  CreateCaseStageResponse,
  CreateCompanyParams,
  CreateCompanyResponse,
  CreateCustomFieldParams,
  CreateCustomFieldResponse,
  CreateEventParams,
  CreateEventResponse,
  CreateExpenseParams,
  CreateExpenseResponse,
  CreateFirmDocumentParams,
  CreateFirmDocumentResponse,
  CreateLeadParams,
  CreateLeadResponse,
  CreateLocationParams,
  CreateLocationResponse,
  CreateNoteParams,
  CreateNoteResponse,
  CreatePersonParams,
  CreatePersonResponse,
  CreatePracticeAreaParams,
  CreatePracticeAreaResponse,
  CreateReferralSourceParams,
  CreateReferralSourceResponse,
  CreateTaskParams,
  CreateTaskResponse,
  CreateTimeEntryParams,
  CreateTimeEntryResponse,
  ListCasesParams,
  ListCasesResponse,
  ListCaseStagesParams,
  ListCaseStagesResponse,
  ListCompanyContactsParams,
  ListCompanyContactsResponse,
  ListLocationsParams,
  ListLocationsResponse,
  ListPeopleGroupsParams,
  ListPeopleGroupsResponse,
  ListPersonContactsParams,
  ListPersonContactsResponse,
  ListPracticeAreasParams,
  ListPracticeAreasResponse,
  ListReferralSourcesParams,
  ListReferralSourcesResponse,
  ListStaffParams,
  ListStaffResponse,
  UpdateCaseParams,
  UpdateCompanyParams,
  UpdatePersonParams
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
    updateCase: (id: string) => `/cases/${id}`,
    caseStages: '/case_stages',
    companies: '/companies',
    companyDetail: (id: string) => `/companies/${id}`,
    customFields: '/custom_fields',
    createCaseDocuments: (caseId: string) => `/cases/${caseId}/documents`,
    documents: '/documents',
    createNote: ({obj, objId}: {obj: string; objId: string}) => {
      switch (obj) {
        case 'case':
          return `/cases/${objId}/notes`;
        case 'client':
          return `/clients/${objId}/notes`;
        case 'company':
          return `/companies/${objId}/notes`;
        default:
          throw new Error(`Unsupported object type for notes: ${obj}`);
      }
    },
    events: '/events',
    expenses: '/expenses',
    leads: '/leads',
    locations: '/locations',
    people: '/clients',
    updatePerson: (id: string) => `/clients/${id}`,
    practiceAreas: '/practice_areas',
    referralSources: '/referral_sources',
    tasks: '/tasks',
    timeEntries: '/time_entries',
    calls: '/calls',
    peopleGroups: '/people_groups',
    personContacts: '', // TODO: Maybe doesn't exist
    staff: '/staff',
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
  createCaseStage: async ({
    access_token,
    ...caseStageParams
  }: CreateCaseStageParams) => {
    const response = await httpClient.sendRequest<CreateCaseStageResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.caseStages}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: caseStageParams,
    });
    return response.body;
  },
  createCompany: async ({
    access_token,
    ...companyParams
  }: CreateCompanyParams) => {
    const response = await httpClient.sendRequest<CreateCompanyResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.companies}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: companyParams,
    });
    return response.body;
  },
  createCustomField: async ({
    access_token,
    ...customFieldParams
  }: CreateCustomFieldParams) => {
    const response = await httpClient.sendRequest<CreateCustomFieldResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.customFields}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: customFieldParams,
    });
    return response.body;
  },
  createFirmDocument: async ({
    access_token,
    ...documentParams
  }: CreateFirmDocumentParams) => {
    const response = await httpClient.sendRequest<CreateFirmDocumentResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.documents}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: documentParams,
    });
    return response.body;
  },
  createCaseDocument: async ({
    access_token,
    caseId,
    ...documentParams
  }: CreateCaseDocumentParams) => {
    const response = await httpClient.sendRequest<CreateFirmDocumentResponse>({
      method: HttpMethod.POST,
      url: myCaseApi.baseUrl + myCaseApi.endpoints.createCaseDocuments(caseId),
      headers: myCaseApi.getAuthHeader(access_token),
      body: documentParams,
    });
    return response.body;
  },
  createEvent: async ({ access_token, ...eventParams }: CreateEventParams) => {
    const response = await httpClient.sendRequest<CreateEventResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.events}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: eventParams,
    });
    return response.body;
  },
  createExpense: async ({
    access_token,
    ...experseParams
  }: CreateExpenseParams) => {
    const response = await httpClient.sendRequest<CreateExpenseResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.expenses}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: experseParams,
    });
    return response.body;
  },
  createLead: async ({ access_token, ...leadParams }: CreateLeadParams) => {
    const response = await httpClient.sendRequest<CreateLeadResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.leads}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: leadParams,
    });
    return response.body;
  },
  createLocation: async ({
    access_token,
    ...locationParams
  }: CreateLocationParams) => {
    const response = await httpClient.sendRequest<CreateLocationResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.locations}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: locationParams,
    });
    return response.body;
  },
  createNote: async ({ access_token, obj, objId, ...noteParams }: CreateNoteParams) => {
    const response = await httpClient.sendRequest<CreateNoteResponse>({
      method: HttpMethod.POST,
      url: myCaseApi.baseUrl + myCaseApi.endpoints.createNote({obj, objId}),
      headers: myCaseApi.getAuthHeader(access_token),
      body: noteParams,
    });
    return response.body;
  },
  createPerson: async ({
    access_token,
    ...clientParams
  }: CreatePersonParams) => {
    const response = await httpClient.sendRequest<CreatePersonResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.people}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: clientParams,
    });
    return response.body;
  },
  createPracticeArea: async ({
    access_token,
    ...practiceAreaParams
  }: CreatePracticeAreaParams) => {
    const response = await httpClient.sendRequest<CreatePracticeAreaResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.practiceAreas}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: practiceAreaParams,
    });
    return response.body;
  },
  createReferralSource: async ({
    access_token,
    ...referralSourceParams
  }: CreateReferralSourceParams) => {
    const response = await httpClient.sendRequest<CreateReferralSourceResponse>(
      {
        method: HttpMethod.POST,
        url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.referralSources}`,
        headers: myCaseApi.getAuthHeader(access_token),
        body: referralSourceParams,
      }
    );
    return response.body;
  },
  createTask: async ({ access_token, ...taskParams }: CreateTaskParams) => {
    const response = await httpClient.sendRequest<CreateTaskResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.tasks}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: taskParams,
    });
    return response.body;
  },
  createTimeEntry: async ({
    access_token,
    ...timeEntryParams
  }: CreateTimeEntryParams) => {
    const response = await httpClient.sendRequest<CreateTimeEntryResponse>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.timeEntries}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: timeEntryParams,
    });
    return response.body;
  },
  createCall: async ({ access_token, ...callParams }: CreateCallParams) => {
    await httpClient.sendRequest<null>({
      method: HttpMethod.POST,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.calls}`,
      headers: myCaseApi.getAuthHeader(access_token),
      body: callParams,
    });
    return 'success';
  },
  updateCase: async ({ access_token, ...caseParams }: UpdateCaseParams) => {
    await httpClient.sendRequest<null>({
      method: HttpMethod.PUT,
      url: myCaseApi.baseUrl + myCaseApi.endpoints.updateCase(caseParams.id),
      headers: myCaseApi.getAuthHeader(access_token),
      body: caseParams,
    });
    return "success";
  },
  updateCompany: async ({
    access_token,
    ...companyParams
  }: UpdateCompanyParams) => {
    await httpClient.sendRequest<null>({
      method: HttpMethod.PUT,
      url:
        myCaseApi.baseUrl + myCaseApi.endpoints.companyDetail(companyParams.id),
      headers: myCaseApi.getAuthHeader(access_token),
      body: companyParams,
    });
    return "success";
  },
  updatePerson: async ({
    access_token,
    ...personParams
  }: UpdatePersonParams) => {
    await httpClient.sendRequest<null>({
      method: HttpMethod.PUT,
      url:
        myCaseApi.baseUrl + myCaseApi.endpoints.updatePerson(personParams.id),
      headers: myCaseApi.getAuthHeader(access_token),
      body: personParams,
    });
    return "success";
  },
  listCases: async ({ access_token }: ListCasesParams) => {
    const response = await httpClient.sendRequest<ListCasesResponse>({
      method: HttpMethod.GET,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.cases}`,
      headers: myCaseApi.getAuthHeader(access_token),
    });
    return response.body;
  },
  listCaseStages: async ({ access_token }: ListCaseStagesParams) => {
    const response = await httpClient.sendRequest<ListCaseStagesResponse>({
      method: HttpMethod.GET,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.caseStages}`,
      headers: myCaseApi.getAuthHeader(access_token),
    });
    return response.body;
  },
  listCompanyContacts: async ({
    access_token,
    companyId,
  }: ListCompanyContactsParams) => {
    const response = await httpClient.sendRequest<ListCompanyContactsResponse>({
      method: HttpMethod.GET,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.companyDetail(
        companyId
      )}`,
      headers: myCaseApi.getAuthHeader(access_token),
    });
    return response.body;
  },
  listLocations: async ({ access_token }: ListLocationsParams) => {
    const response = await httpClient.sendRequest<ListLocationsResponse>({
      method: HttpMethod.GET,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.locations}`,
      headers: myCaseApi.getAuthHeader(access_token),
    });
    return response.body;
  },
  listPeopleGroups: async ({ access_token }: ListPeopleGroupsParams) => {
    const response = await httpClient.sendRequest<ListPeopleGroupsResponse>({
      method: HttpMethod.GET,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.peopleGroups}`,
      headers: myCaseApi.getAuthHeader(access_token),
    });
    return response.body;
  },
  listPersonContacts: async ({ access_token }: ListPersonContactsParams) => {
    const response = await httpClient.sendRequest<ListPersonContactsResponse>({
      method: HttpMethod.GET,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.personContacts}`,
      headers: myCaseApi.getAuthHeader(access_token),
    });
    return response.body;
  },
  listPracticeAreas: async ({ access_token }: ListPracticeAreasParams) => {
    const response = await httpClient.sendRequest<ListPracticeAreasResponse>({
      method: HttpMethod.GET,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.practiceAreas}`,
      headers: myCaseApi.getAuthHeader(access_token),
    });
    return response.body;
  },
  listReferralSources: async ({ access_token }: ListReferralSourcesParams) => {
    const response = await httpClient.sendRequest<ListReferralSourcesResponse>({
      method: HttpMethod.GET,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.referralSources}`,
      headers: myCaseApi.getAuthHeader(access_token),
    });
    return response.body;
  },
  listStaff: async ({ access_token }: ListStaffParams) => {
    const response = await httpClient.sendRequest<ListStaffResponse>({
      method: HttpMethod.GET,
      url: `${myCaseApi.baseUrl}${myCaseApi.endpoints.staff}`,
      headers: myCaseApi.getAuthHeader(access_token),
    });
    return response.body;
  },
};
