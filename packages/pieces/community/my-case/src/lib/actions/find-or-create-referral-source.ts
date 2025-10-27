import { createAction, Property } from '@activepieces/pieces-framework';

export const findOrCreateReferralSource = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findOrCreateReferralSource',
  displayName: 'Find or Create Referral Source',
  description: 'Finds or creates a referral source.',
  props: {},
  async run() {
    // Action logic here
  },
});
