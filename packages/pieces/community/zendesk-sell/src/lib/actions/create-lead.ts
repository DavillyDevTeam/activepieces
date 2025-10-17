import { createAction, Property } from '@activepieces/pieces-framework';

export const createLead = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createLead',
  displayName: 'Create Lead',
  description: 'Create a lead record',
  props: {},
  async run() {
    // Action logic here
  },
});
