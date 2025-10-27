import { createAction, Property } from '@activepieces/pieces-framework';

export const findReferralSource = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findReferralSource',
  displayName: 'Find Referral Source',
  description: 'Finds a referral source.',
  props: {},
  async run() {
    // Action logic here
  },
});
