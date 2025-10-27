import { createAction, Property } from '@activepieces/pieces-framework';

export const findOrCreatePerson = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findOrCreatePerson',
  displayName: 'Find or Create Person',
  description: 'Finds or creates a person.',
  props: {},
  async run() {
    // Action logic here
  },
});
