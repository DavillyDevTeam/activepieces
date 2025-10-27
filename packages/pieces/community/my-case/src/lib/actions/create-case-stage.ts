import { createAction, Property } from '@activepieces/pieces-framework';

export const createCaseStage = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createCaseStage',
  displayName: 'Create Case Stage',
  description: 'Creates a new case stage.',
  props: {},
  async run() {
    // Action logic here
  },
});
