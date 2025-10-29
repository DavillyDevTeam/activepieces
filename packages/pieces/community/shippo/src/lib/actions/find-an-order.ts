import { createAction, Property } from '@activepieces/pieces-framework';

export const findAnOrder = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findAnOrder',
  displayName: 'Find an Order',
  description: 'Searches for an order by its ID.',
  props: {},
  async run() {
    // Action logic here
  },
});
