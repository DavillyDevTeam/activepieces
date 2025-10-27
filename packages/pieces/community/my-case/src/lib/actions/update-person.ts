import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const updatePerson = createAction({
  auth: myCaseAuth,
  name: 'updatePerson',
  displayName: 'Update Person',
  description: 'Updates an existing person.',
  props: {},
  async run() {
    // Action logic here
  },
});
