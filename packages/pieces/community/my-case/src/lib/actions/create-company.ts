import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createCompany = createAction({
  auth: myCaseAuth,
  name: 'createCompany',
  displayName: 'Create Company',
  description: 'Creates a new company.',
  props: {},
  async run() {
    // Action logic here
  },
});
