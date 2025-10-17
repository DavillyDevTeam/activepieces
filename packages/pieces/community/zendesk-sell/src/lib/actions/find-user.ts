import { createAction, Property } from '@activepieces/pieces-framework';

export const findUser = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findUser',
  displayName: 'Find User',
  description: 'Finds a User.',
  props: {},
  async run() {
    // Action logic here
  },
});
