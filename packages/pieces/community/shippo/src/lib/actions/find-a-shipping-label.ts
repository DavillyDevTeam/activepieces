import { createAction, Property } from '@activepieces/pieces-framework';

export const findAShippingLabel = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findAShippingLabel',
  displayName: 'Find a Shipping Label',
  description: 'Searches for a shipping label by its ID.',
  props: {},
  async run() {
    // Action logic here
  },
});
