import { createAction, Property } from '@activepieces/pieces-framework';
import { myCaseApi, myCaseAuth } from '../common';
import {
  clientDropdown,
  leadDropdown,
  staffDropdown,
} from '../common/properties';

export const createCall = createAction({
  auth: myCaseAuth,
  name: 'createCall',
  displayName: 'Create Call',
  description: 'Creates a new call.',
  props: {
    called_at: Property.DateTime({
      displayName: 'Called At',
      description: 'The date and time when the call was made.',
      required: true,
    }),
    caller_phone_number: Property.ShortText({
      displayName: 'Caller Phone Number',
      description: 'The phone number of the caller.',
      required: true,
    }),
    call_for: staffDropdown({ required: true }),
    message: Property.LongText({
      displayName: 'Message',
      description: 'The message or notes for the call.',
      required: true,
    }),
    caller_name: Property.ShortText({
      displayName: 'Caller Name',
      description: 'The name of the caller.',
      required: true,
    }),
    client: clientDropdown({ required: true }),
    lead: leadDropdown({ required: true }),
    call_type: Property.StaticDropdown({
      displayName: 'Call Type',
      description: 'The type of the call.',
      required: false,
      defaultValue: 'incoming',
      options: {
        options: [
          { label: 'Incoming', value: 'incoming' },
          { label: 'Outgoing', value: 'outgoing' },
        ],
      },
    }),
    resolved: Property.Checkbox({
      displayName: 'Resolved',
      description: 'Indicates whether the call issue has been resolved.',
      required: false,
      defaultValue: false,
    }),
  },
  async run({ auth, propsValue }) {
    const callParams = {
      ...propsValue,
      call_for: { id: propsValue.call_for || 0 },
      client: { id: propsValue.client || 0 },
      lead: { id: propsValue.lead || 0 },
      call_type: propsValue.call_type as 'incoming' | 'outgoing' | undefined,
    };
    const response = await myCaseApi.createCall({
      access_token: auth.access_token,
      ...callParams,
    });
    return response;
  },
});
