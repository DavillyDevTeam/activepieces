import { createAction, Property } from '@activepieces/pieces-framework';
import { ibmCognosAnalyticsAuth } from '../common';

export const createDataSource = createAction({
  auth: ibmCognosAnalyticsAuth,
  name: 'createDataSource',
  displayName: 'Create Data Source',
  description: 'Creates a new Data Source.',
  props: {},
  async run() {
    // Action logic here
  },
});
