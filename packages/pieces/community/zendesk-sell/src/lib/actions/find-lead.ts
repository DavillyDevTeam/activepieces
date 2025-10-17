import { createAction, Property } from '@activepieces/pieces-framework';

export const findLead = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findLead',
  displayName: 'Find Lead',
  description: 'Find a lead by field(s).',
  props: {},
  async run() {
    // Action logic here
  },
});
