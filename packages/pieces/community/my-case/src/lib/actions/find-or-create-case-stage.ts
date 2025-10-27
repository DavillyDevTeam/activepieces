import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findOrCreateCaseStage = createAction({
  auth: myCaseAuth,
  name: 'findOrCreateCaseStage',
  displayName: 'Find or Create Case Stage',
  description: 'Finds or creates a case stage.',
  props: {},
  async run() {
    // Action logic here
  },
});
