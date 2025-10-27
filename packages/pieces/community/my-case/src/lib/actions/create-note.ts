import { createAction, Property } from '@activepieces/pieces-framework';

export const createNote = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createNote',
  displayName: 'Create Note',
  description: 'Creates a new note.',
  props: {},
  async run() {
    // Action logic here
  },
});
