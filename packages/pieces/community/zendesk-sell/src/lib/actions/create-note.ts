import { createAction, Property } from '@activepieces/pieces-framework';

export const createNote = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createNote',
  displayName: 'Create Note',
  description: 'Add a note to a deal, lead, or contact.',
  props: {},
  async run() {
    // Action logic here
  },
});
