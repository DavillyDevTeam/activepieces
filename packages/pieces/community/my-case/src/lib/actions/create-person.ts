import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createPerson = createAction({
  auth: myCaseAuth,
  name: 'createPerson',
  displayName: 'Create Person',
  description: 'Creates a new person.',
  props: {},
  async run() {
    // Action logic here
  },
});
