import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findStaff = createAction({
  auth: myCaseAuth,
  name: 'findStaff',
  displayName: 'Find Staff',
  description: 'Finds a staff.',
  props: {},
  async run() {
    // Action logic here
  },
});
