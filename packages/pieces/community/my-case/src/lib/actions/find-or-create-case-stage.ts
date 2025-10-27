import { createAction, Property } from '@activepieces/pieces-framework';

export const findOrCreateCaseStage = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findOrCreateCaseStage',
  displayName: 'Find or Create Case Stage',
  description: 'Finds or creates a case stage.',
  props: {},
  async run() {
    // Action logic here
  },
});
