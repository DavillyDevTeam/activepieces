import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const updateCase = createAction({
  auth: myCaseAuth,
  name: 'updateCase',
  displayName: 'Update Case',
  description: 'Updates an existing case.',
  props: {},
  async run() {
    // Action logic here
  },
});
