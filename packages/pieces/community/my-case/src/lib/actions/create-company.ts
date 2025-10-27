import { createAction, Property } from '@activepieces/pieces-framework';

export const createCompany = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createCompany',
  displayName: 'Create Company',
  description: 'Creates a new company.',
  props: {},
  async run() {
    // Action logic here
  },
});
