import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findPracticeArea = createAction({
  auth: myCaseAuth,
  name: 'findPracticeArea',
  displayName: 'Find Practice Area',
  description: 'Finds a practice area.',
  props: {},
  async run() {
    // Action logic here
  },
});
