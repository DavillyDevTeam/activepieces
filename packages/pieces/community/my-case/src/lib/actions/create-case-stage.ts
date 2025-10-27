import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createCaseStage = createAction({
  auth: myCaseAuth,
  name: 'createCaseStage',
  displayName: 'Create Case Stage',
  description: 'Creates a new case stage.',
  props: {},
  async run() {
    // Action logic here
  },
});
