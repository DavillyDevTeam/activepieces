import { createAction, Property } from '@activepieces/pieces-framework';

export const findContact = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findContact',
  displayName: 'Find Contact',
  description: 'Find a contact by email, name, or other identifier.',
  props: {},
  async run() {
    // Action logic here
  },
});
