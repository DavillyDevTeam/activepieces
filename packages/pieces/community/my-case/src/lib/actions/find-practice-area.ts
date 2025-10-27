import { createAction, Property } from '@activepieces/pieces-framework';

export const findPracticeArea = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findPracticeArea',
  displayName: 'Find Practice Area',
  description: 'Finds a practice area.',
  props: {},
  async run() {
    // Action logic here
  },
});
