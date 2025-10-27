import { createAction, Property } from '@activepieces/pieces-framework';

export const findLocation = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findLocation',
  displayName: 'Find Location',
  description: 'Finds a location.',
  props: {},
  async run() {
    // Action logic here
  },
});
