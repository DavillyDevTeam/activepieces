import { createAction, Property } from '@activepieces/pieces-framework';

export const createCase = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createCase',
  displayName: 'Create Case',
  description: 'Creates a new case.',
  props: {},
  async run() {
    // Action logic here
  },
});
