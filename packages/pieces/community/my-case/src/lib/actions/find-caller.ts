import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findCaller = createAction({
  auth: myCaseAuth,
  name: 'findCaller',
  displayName: 'Find Caller',
  description: '	Finds a caller.',
  props: {},
  async run() {
    // Action logic here
  },
});
