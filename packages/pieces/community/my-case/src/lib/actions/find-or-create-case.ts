import { createAction, Property } from '@activepieces/pieces-framework';

export const findOrCreateCase = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findOrCreateCase',
  displayName: 'Find or Create Case',
  description: 'Finds or creates a case.',
  props: {},
  async run() {
    // Action logic here
  },
});
