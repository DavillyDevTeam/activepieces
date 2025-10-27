import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findPeopleGroup = createAction({
  auth: myCaseAuth,
  name: 'findPeopleGroup',
  displayName: 'Find People Group',
  description: 'Finds a people group.',
  props: {},
  async run() {
    // Action logic here
  },
});
