import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createPracticeArea = createAction({
  auth: myCaseAuth,
  name: 'createPracticeArea',
  displayName: 'Create Practice Area',
  description: 'Creates a new practice area.',
  props: {},
  async run() {
    // Action logic here
  },
});
