import { createAction, Property } from '@activepieces/pieces-framework';

export const findOrCreateLocation = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findOrCreateLocation',
  displayName: 'Find or Create Location',
  description: 'Finds or creates a location.',
  props: {},
  async run() {
    // Action logic here
  },
});
