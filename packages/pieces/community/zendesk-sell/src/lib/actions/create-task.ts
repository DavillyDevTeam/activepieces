import { createAction, Property } from '@activepieces/pieces-framework';

export const createTask = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createTask',
  displayName: 'Create Task',
  description: 'Creates a task.',
  props: {},
  async run() {
    // Action logic here
  },
});
