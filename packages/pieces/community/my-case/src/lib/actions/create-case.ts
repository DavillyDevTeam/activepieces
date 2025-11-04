import { createAction, Property } from '@activepieces/pieces-framework';
import { myCaseApi, myCaseAuth, parseCustomFieldValue } from '../common';
import {
  caseStageDropdown,
  clientDropdown,
  multiSelectClientDropdown,
  multiSelectCompanyDropdowns,
  practiceAreaDropdown,
} from '../common/properties';

export const createCase = createAction({
  auth: myCaseAuth,
  name: 'createCase',
  displayName: 'Create Case',
  description: 'Creates a new case.',
  props: {
    name: Property.ShortText({
      displayName: 'Case Name',
      description: 'The name of the case to be created.',
      required: true,
    }),
    case_number: Property.ShortText({
      displayName: 'Case Number',
      description: 'The case number.',
      required: false,
    }),
    opened_date: Property.DateTime({
      displayName: 'Opened Date',
      description: 'The date when the case was opened.',
      required: false,
    }),
    case_stage: caseStageDropdown({ required: false }),
    practice_area: practiceAreaDropdown({ required: false }),
    description: Property.LongText({
      displayName: 'Description',
      description: 'A detailed description of the case.',
      required: false,
    }),
    sol_date: Property.DateTime({
      displayName: 'SOL Date',
      description: 'The statute of limitations date for the case.',
      required: false,
    }),
    status: Property.StaticDropdown({
      displayName: 'Status',
      description: 'The current status of the case.',
      required: false,
      defaultValue: 'opened',
      options: {
        options: [
          { label: 'Open', value: 'opened' },
          { label: 'Closed', value: 'closed' },
        ],
      },
    }),
    outstanding_balance: Property.Number({
      displayName: 'Outstanding Balance',
      description: 'The outstanding balance for the case.',
      required: false,
    }),
    billing_contact: clientDropdown({ required: false }),
    clients: multiSelectClientDropdown({ required: false }),
    companies: multiSelectCompanyDropdowns({ required: false }),
    staff: Property.Array({
      displayName: 'Staff',
      description: 'List of staff members associated with the case.',
      required: false,
      properties: {
        id: Property.Number({
          displayName: 'Staff ID',
          description: 'The ID of the staff member.',
          required: true,
        }),
        lead_lawyer: Property.Checkbox({
          displayName: 'Lead Lawyer',
          description: 'Is this staff member the lead lawyer?',
          required: true,
        }),
        originating_lawyer: Property.Checkbox({
          displayName: 'Originating Lawyer',
          description: 'Is this staff member the originating lawyer?',
          required: true,
        }),
      },
    }),
    custom_field_values: Property.Array({
      displayName: 'Custom Field Values',
      description: 'List of custom field values to set for the case.',
      required: false,
      properties: {
        custom_field_id: Property.Number({
          displayName: 'Custom Field ID',
          description: 'The ID of the custom field.',
          required: true,
        }),
        value: Property.ShortText({
          displayName: 'Value',
          description: 'The value for the custom field.',
          required: true,
        }),
      },
    }),
  },
  async run({ auth, propsValue }) {
    const {
      case_stage,
      practice_area,
      status,
      billing_contact,
      clients,
      companies,
      staff,
      custom_field_values,
      ...rest
    } = propsValue;
    const caseProperties = {
      case_stage: case_stage ? case_stage.toString() : undefined,
      practice_area: practice_area ? practice_area.toString() : undefined,
      status: status as 'opened' | 'closed' | undefined,
      billing_contact: billing_contact
        ? { id: Number(billing_contact) }
        : undefined,
      clients: clients
        ? clients.map((clientId) => ({ id: Number(clientId) }))
        : undefined,
      companies: companies
        ? companies.map((companyId) => ({ id: Number(companyId) }))
        : undefined,
      staff: staff as {
        id: number;
        lead_lawyer: boolean;
        originating_lawyer: boolean;
      }[],
      custom_field_values: custom_field_values
        ? custom_field_values.map((field) =>
            parseCustomFieldValue(
              field as {
                custom_field_id: number;
                value: string;
              }
            )
          )
        : undefined,
      ...rest,
    };
    const response = await myCaseApi.createCase({
      access_token: auth.access_token,
      ...caseProperties,
    });
    return response;
  },
});
