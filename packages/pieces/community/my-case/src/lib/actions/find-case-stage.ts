import { createAction, Property } from '@activepieces/pieces-framework';

export const findCaseStage = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findCaseStage',
  displayName: 'Find Case Stage',
  description: 'Finds a case stage.',
  props: {},
  async run() {
    // Action logic here
  },
});
