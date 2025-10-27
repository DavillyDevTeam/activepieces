import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findCase = createAction({
  auth: myCaseAuth,
  name: 'findCase',
  displayName: 'Find Case',
  description: 'Finds a case.',
  props: {},
  async run() {
    // Action logic here
  },
});
