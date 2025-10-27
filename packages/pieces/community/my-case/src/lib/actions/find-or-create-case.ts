import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findOrCreateCase = createAction({
  auth: myCaseAuth,
  name: 'findOrCreateCase',
  displayName: 'Find or Create Case',
  description: 'Finds or creates a case.',
  props: {},
  async run() {
    // Action logic here
  },
});
