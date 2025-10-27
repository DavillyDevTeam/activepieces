import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createDocument = createAction({
  auth: myCaseAuth,
  name: 'createDocument',
  displayName: 'Create Document',
  description: 'Creates a new document.',
  props: {},
  async run() {
    // Action logic here
  },
});
