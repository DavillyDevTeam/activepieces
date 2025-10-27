import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createEvent = createAction({
  auth: myCaseAuth,
  name: 'createEvent',
  displayName: 'Create Event',
  description: 'Creates a new event.',
  props: {},
  async run() {
    // Action logic here
  },
});
