import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createCustomField = createAction({
  auth: myCaseAuth,
  name: 'createCustomField',
  displayName: 'Create Custom Field',
  description: 'Creates a new custom field.',
  props: {},
  async run() {
    // Action logic here
  },
});
