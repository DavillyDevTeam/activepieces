import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findCaseStage = createAction({
  auth: myCaseAuth,
  name: 'findCaseStage',
  displayName: 'Find Case Stage',
  description: 'Finds a case stage.',
  props: {},
  async run() {
    // Action logic here
  },
});
