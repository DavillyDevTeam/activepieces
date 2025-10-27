import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const updateCompany = createAction({
  auth: myCaseAuth,
  name: 'updateCompany',
  displayName: 'Update Company',
  description: 'Updates an existing company.',
  props: {},
  async run() {
    // Action logic here
  },
});
