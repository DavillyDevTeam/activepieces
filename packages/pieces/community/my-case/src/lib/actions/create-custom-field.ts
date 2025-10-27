import { createAction, Property } from '@activepieces/pieces-framework';

export const createCustomField = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createCustomField',
  displayName: 'Create Custom Field',
  description: 'Creates a new custom field.',
  props: {},
  async run() {
    // Action logic here
  },
});
