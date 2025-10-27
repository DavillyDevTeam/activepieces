import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findOrCreateLocation = createAction({
  auth: myCaseAuth,
  name: 'findOrCreateLocation',
  displayName: 'Find or Create Location',
  description: 'Finds or creates a location.',
  props: {},
  async run() {
    // Action logic here
  },
});
