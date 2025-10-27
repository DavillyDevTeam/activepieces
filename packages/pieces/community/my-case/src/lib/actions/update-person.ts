import { createAction, Property } from '@activepieces/pieces-framework';

export const updatePerson = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'updatePerson',
  displayName: 'Update Person',
  description: 'Updates an existing person.',
  props: {},
  async run() {
    // Action logic here
  },
});
