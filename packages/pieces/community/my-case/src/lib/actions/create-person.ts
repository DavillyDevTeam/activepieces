import { createAction, Property } from '@activepieces/pieces-framework';

export const createPerson = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createPerson',
  displayName: 'Create Person',
  description: 'Creates a new person.',
  props: {},
  async run() {
    // Action logic here
  },
});
