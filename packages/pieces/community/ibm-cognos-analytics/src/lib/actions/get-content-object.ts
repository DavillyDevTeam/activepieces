import { createAction, Property } from '@activepieces/pieces-framework';
import { ibmCognosAnalyticsAuth } from '../common';

export const getContentObject = createAction({
  auth: ibmCognosAnalyticsAuth,
  name: 'getContentObject',
  displayName: 'Get Content Object',
  description: 'Gets content object.',
  props: {},
  async run() {
    // Action logic here
  },
});
