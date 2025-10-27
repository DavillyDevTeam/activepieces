import { createAction, Property } from '@activepieces/pieces-framework';

export const updateCase = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'updateCase',
  displayName: 'Update Case',
  description: 'Updates an existing case.',
  props: {},
  async run() {
    // Action logic here
  },
});
