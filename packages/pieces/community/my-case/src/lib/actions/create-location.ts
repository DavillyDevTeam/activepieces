import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createLocation = createAction({
  auth: myCaseAuth,
  name: 'createLocation',
  displayName: 'Create Location',
  description: 'Creates a new location.',
  props: {},
  async run() {
    // Action logic here
  },
});
