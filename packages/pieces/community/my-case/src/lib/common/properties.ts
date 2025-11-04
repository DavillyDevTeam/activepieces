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

export const leadDropdown = ({ required = false }) => Property.Dropdown({
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
