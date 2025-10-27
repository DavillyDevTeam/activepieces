import { createAction, Property } from '@activepieces/pieces-framework';

export const findPersonContact = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findPersonContact',
  displayName: 'Find Person Contact',
  description: 'Finds a person.',
  props: {},
  async run() {
    // Action logic here
  },
});
