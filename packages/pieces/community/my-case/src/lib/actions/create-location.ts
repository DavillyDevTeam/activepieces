import { createAction, Property } from '@activepieces/pieces-framework';

export const createLocation = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createLocation',
  displayName: 'Create Location',
  description: 'Creates a new location.',
  props: {},
  async run() {
    // Action logic here
  },
});
