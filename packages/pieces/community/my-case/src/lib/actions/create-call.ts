import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createCall = createAction({
  auth: myCaseAuth,
  name: 'createCall',
  displayName: 'Create Call',
  description: 'Creates a new call.',
  props: {},
  async run() {
    // Action logic here
  },
});
