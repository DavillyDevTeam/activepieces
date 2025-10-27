import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createCase = createAction({
  auth: myCaseAuth,
  name: 'createCase',
  displayName: 'Create Case',
  description: 'Creates a new case.',
  props: {},
  async run() {
    // Action logic here
  },
});
