import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findLocation = createAction({
  auth: myCaseAuth,
  name: 'findLocation',
  displayName: 'Find Location',
  description: 'Finds a location.',
  props: {},
  async run() {
    // Action logic here
  },
});
