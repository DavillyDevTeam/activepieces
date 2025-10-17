import { createAction, Property } from '@activepieces/pieces-framework';

export const createDeal = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createDeal',
  displayName: 'Create Deal',
  description: 'Create a new deal under a contact or lead,',
  props: {},
  async run() {
    // Action logic here
  },
});
