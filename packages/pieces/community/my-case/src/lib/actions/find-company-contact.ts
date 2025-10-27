import { createAction, Property } from '@activepieces/pieces-framework';

export const findCompanyContact = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findCompanyContact',
  displayName: 'Find Company Contact',
  description: 'Finds a company.',
  props: {},
  async run() {
    // Action logic here
  },
});
