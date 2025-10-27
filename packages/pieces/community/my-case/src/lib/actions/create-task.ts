import { createAction, Property } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createTask = createAction({
  auth: myCaseAuth,
  name: 'createTask',
  displayName: 'Create Task',
  description: 'Creates a new task.',
  props: {},
  async run() {
    // Action logic here
  },
});
