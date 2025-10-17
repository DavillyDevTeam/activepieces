import { createAction, Property } from '@activepieces/pieces-framework';
import { ibmCognosAnalyticsAuth } from '../common';

export const updateContentObject = createAction({
  auth: ibmCognosAnalyticsAuth,
  name: 'updateContentObject',
  displayName: 'Update Content Object',
  description: 'Updates an existing content object.',
  props: {},
  async run() {
    // Action logic here
  },
});
