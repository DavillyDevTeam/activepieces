import { createAction, Property } from '@activepieces/pieces-framework';

export const findOrCreateCompany = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findOrCreateCompany',
  displayName: 'Find or Create Company',
  description: 'Finds or creates a company.',
  props: {},
  async run() {
    // Action logic here
  },
});
