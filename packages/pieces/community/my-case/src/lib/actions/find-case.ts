import { createAction, Property } from '@activepieces/pieces-framework';

export const findCase = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findCase',
  displayName: 'Find Case',
  description: 'Finds a case.',
  props: {},
  async run() {
    // Action logic here
  },
});
