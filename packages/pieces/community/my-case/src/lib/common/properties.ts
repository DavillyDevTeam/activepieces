import { OAuth2PropertyValue, Property } from '@activepieces/pieces-framework';
import { myCaseApi } from '.';

export const staffDropdown = ({ required = false }) =>
  Property.Dropdown({
    displayName: 'Staff Member',
    description: 'Select a staff member from the list.',
    required,
    refreshers: ['auth'],
    options: async ({ auth }: { auth?: OAuth2PropertyValue }) => {
      if (!auth) {
        return {
          options: [],
          disabled: true,
          placeholder: 'Please select an authentication first',
        };
      }
      const staffMembers = await myCaseApi.listStaff({
        access_token: auth.access_token,
      });
      return {
        options: staffMembers.map((member) => ({
          label: member.first_name + ' ' + member.last_name,
          value: member.id,
        })),
      };
    },
  });

export const clientDropdown = ({ required = false }) =>
  Property.Dropdown({
    displayName: 'Client',
    description: 'Select a client from the list.',
    required,
    refreshers: ['auth'],
    options: async ({ auth }: { auth?: OAuth2PropertyValue }) => {
      if (!auth) {
        return {
          options: [],
          disabled: true,
          placeholder: 'Please select an authentication first',
        };
      }
      const clients = await myCaseApi.listPersonContacts({
        access_token: auth.access_token,
      });
      return {
        options: clients.map((client) => ({
          label: client.first_name + ' ' + client.last_name,
          value: client.id,
        })),
      };
    },
  });

export const multiSelectClientDropdown = ({ required = false }) =>
  Property.MultiSelectDropdown({
    displayName: 'Clients',
    description: 'Select clients from the list.',
    required,
    refreshers: ['auth'],
    options: async ({ auth }: { auth?: OAuth2PropertyValue }) => {
      if (!auth) {
        return {
          options: [],
          disabled: true,
          placeholder: 'Please select an authentication first',
        };
      }
      const clients = await myCaseApi.listPersonContacts({
        access_token: auth.access_token,
      });
      return {
        options: clients.map((client) => ({
          label: client.first_name + ' ' + client.last_name,
          value: client.id,
        })),
      };
    },
  });

export const leadDropdown = ({ required = false }) =>
  Property.Dropdown({
    displayName: 'Lead',
    description: 'Select a lead from the list.',
    required,
    refreshers: ['auth'],
    options: async ({ auth }: { auth?: OAuth2PropertyValue }) => {
      if (!auth) {
        return {
          options: [],
          disabled: true,
          placeholder: 'Please select an authentication first',
        };
      }
      const leads = await myCaseApi.listLeads({
        access_token: auth.access_token,
      });
      return {
        options: leads.map((lead) => ({
          label: lead.first_name + ' ' + lead.last_name,
          value: lead.id,
        })),
      };
    },
  });

export const caseStageDropdown = ({ required = false }) =>
  Property.Dropdown({
    displayName: 'Case Stage',
    description: 'Select the stage of the case.',
    required,
    refreshers: ['auth'],
    options: async ({ auth }: { auth?: OAuth2PropertyValue }) => {
      if (!auth) {
        return {
          options: [],
          disabled: true,
          placeholder: 'Please select an authentication first',
        };
      }
      const caseStages = await myCaseApi.listCaseStages({
        access_token: auth.access_token,
      });
      return {
        options: caseStages.map((stage) => ({
          label: stage.name,
          value: stage.id,
        })),
      };
    },
  });

export const practiceAreaDropdown = ({ required = false }) =>
  Property.Dropdown({
    displayName: 'Practice Area',
    description: 'Select the practice area of the case.',
    required,
    refreshers: ['auth'],
    options: async ({ auth }: { auth?: OAuth2PropertyValue }) => {
      if (!auth) {
        return {
          options: [],
          disabled: true,
          placeholder: 'Please select an authentication first',
        };
      }
      const practiceAreas = await myCaseApi.listPracticeAreas({
        access_token: auth.access_token,
      });
      return {
        options: practiceAreas.map((area) => ({
          label: area.name,
          value: area.id,
        })),
      };
    },
  });

export const multiSelectCompanyDropdowns = ({ required = false }) =>
  Property.MultiSelectDropdown({
    displayName: 'Companies',
    description: 'Select companies from the list.',
    required,
    refreshers: ['auth'],
    options: async ({ auth }: { auth?: OAuth2PropertyValue }) => {
      if (!auth) {
        return {
          options: [],
          disabled: true,
          placeholder: 'Please select an authentication first',
        };
      }
      const companies = await myCaseApi.listCompanies({
        access_token: auth.access_token,
      });
      return {
        options: companies.map((company) => ({
          label: company.name,
          value: company.id,
        })),
      };
    },
  });
