import { createAction, Property } from '@activepieces/pieces-framework';

export const createReferralSource = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createReferralSource',
  displayName: 'Create Referral Source',
  description: 'Creates a new referral source.',
  props: {},
  async run() {
    // Action logic here
  },
});
