import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createTimeEntry = createAction({
  auth: myCaseAuth,
  name: 'createTimeEntry',
  displayName: 'Create Time Entry',
  description: 'Creates a new time entry.',
  props: {},
  async run() {
    // Action logic here
  },
});
