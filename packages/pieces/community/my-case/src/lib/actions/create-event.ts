import { createAction, Property } from '@activepieces/pieces-framework';

export const createEvent = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createEvent',
  displayName: 'Create Event',
  description: 'Creates a new event.',
  props: {},
  async run() {
    // Action logic here
  },
});
