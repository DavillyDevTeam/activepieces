import { createAction, Property } from '@activepieces/pieces-framework';

export const updateDeal = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'updateDeal',
  displayName: 'Update Deal',
  description: 'Update deal fields (amount, stage, close date).',
  props: {},
  async run() {
    // Action logic here
  },
});
