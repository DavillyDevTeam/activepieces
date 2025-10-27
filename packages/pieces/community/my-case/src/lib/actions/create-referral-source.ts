import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createReferralSource = createAction({
  auth: myCaseAuth,
  name: 'createReferralSource',
  displayName: 'Create Referral Source',
  description: 'Creates a new referral source.',
  props: {},
  async run() {
    // Action logic here
  },
});
