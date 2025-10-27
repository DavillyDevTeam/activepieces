import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findPersonContact = createAction({
  auth: myCaseAuth,
  name: 'findPersonContact',
  displayName: 'Find Person Contact',
  description: 'Finds a person.',
  props: {},
  async run() {
    // Action logic here
  },
});
