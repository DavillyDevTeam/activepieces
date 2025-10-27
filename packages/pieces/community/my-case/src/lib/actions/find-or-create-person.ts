import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findOrCreatePerson = createAction({
  auth: myCaseAuth,
  name: 'findOrCreatePerson',
  displayName: 'Find or Create Person',
  description: 'Finds or creates a person.',
  props: {},
  async run() {
    // Action logic here
  },
});
