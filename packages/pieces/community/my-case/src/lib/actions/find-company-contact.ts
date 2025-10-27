import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findCompanyContact = createAction({
  auth: myCaseAuth,
  name: 'findCompanyContact',
  displayName: 'Find Company Contact',
  description: 'Finds a company.',
  props: {},
  async run() {
    // Action logic here
  },
});
