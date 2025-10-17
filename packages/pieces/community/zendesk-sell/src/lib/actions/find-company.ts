import { createAction, Property } from '@activepieces/pieces-framework';

export const findCompany = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findCompany',
  displayName: 'Find Company',
  description: 'Finds a company.',
  props: {},
  async run() {
    // Action logic here
  },
});
