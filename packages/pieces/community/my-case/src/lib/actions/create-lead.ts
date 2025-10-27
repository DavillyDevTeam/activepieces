import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createLead = createAction({
  auth: myCaseAuth,
  name: 'createLead',
  displayName: 'Create Lead',
  description: 'Creates a new lead.',
  props: {},
  async run() {
    // Action logic here
  },
});
