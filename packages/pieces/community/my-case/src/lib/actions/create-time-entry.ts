import { createAction, Property } from '@activepieces/pieces-framework';

export const createTimeEntry = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createTimeEntry',
  displayName: 'Create Time Entry',
  description: 'Creates a new time entry.',
  props: {},
  async run() {
    // Action logic here
  },
});
