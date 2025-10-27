import { createAction, Property } from '@activepieces/pieces-framework';

export const findStaff = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findStaff',
  displayName: 'Find Staff',
  description: 'Finds a staff.',
  props: {},
  async run() {
    // Action logic here
  },
});
