import { createAction, Property } from '@activepieces/pieces-framework';
import { ibmCognosAnalyticsAuth } from '../common';

export const copyContentObject = createAction({
  auth: ibmCognosAnalyticsAuth,
  name: 'copyContentObject',
  displayName: 'Copy Content Object',
  description: 'Copy existing content object.',
  props: {},
  async run() {
    // Action logic here
  },
});
