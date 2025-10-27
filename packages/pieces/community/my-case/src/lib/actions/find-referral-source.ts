import { createAction, Property } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const findReferralSource = createAction({
  auth: myCaseAuth,
  name: 'findReferralSource',
  displayName: 'Find Referral Source',
  description: 'Finds a referral source.',
  props: {},
  async run() {
    // Action logic here
  },
});
