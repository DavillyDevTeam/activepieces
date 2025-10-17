import { createAction, Property } from '@activepieces/pieces-framework';

export const findDeal = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findDeal',
  displayName: 'Find Deal',
  description: 'Look up a deal by ID or by filter (e.g. name, reference).',
  props: {},
  async run() {
    // Action logic here
  },
});
