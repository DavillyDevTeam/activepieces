import { createAction, Property } from '@activepieces/pieces-framework';

export const findPeopleGroup = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findPeopleGroup',
  displayName: 'Find People Group',
  description: 'Finds a people group.',
  props: {},
  async run() {
    // Action logic here
  },
});
