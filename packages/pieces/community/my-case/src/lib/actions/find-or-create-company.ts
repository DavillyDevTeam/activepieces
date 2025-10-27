import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findOrCreateCompany = createAction({
  auth: myCaseAuth,
  name: 'findOrCreateCompany',
  displayName: 'Find or Create Company',
  description: 'Finds or creates a company.',
  props: {},
  async run() {
    // Action logic here
  },
});
