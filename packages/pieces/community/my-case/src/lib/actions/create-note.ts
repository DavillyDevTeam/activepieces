import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createNote = createAction({
  auth: myCaseAuth,
  name: 'createNote',
  displayName: 'Create Note',
  description: 'Creates a new note.',
  props: {},
  async run() {
    // Action logic here
  },
});
