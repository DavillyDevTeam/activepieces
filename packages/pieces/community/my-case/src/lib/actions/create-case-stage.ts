import { createAction, Property } from '@activepieces/pieces-framework';
import { myCaseApi, myCaseAuth } from '../common';

export const createCaseStage = createAction({
  auth: myCaseAuth,
  name: 'createCaseStage',
  displayName: 'Create Case Stage',
  description: 'Creates a new case stage.',
  props: {
    name: Property.ShortText({
      displayName: 'Stage Name',
      description: 'Name of the case stage.',
      required: true,
    }),
  },
  async run({ auth, propsValue }) {
    const response = await myCaseApi.createCaseStage({
      access_token: auth.access_token,
      ...propsValue,
    });
    return response;
  },
});
