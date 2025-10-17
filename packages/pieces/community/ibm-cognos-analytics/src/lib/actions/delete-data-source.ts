import { createAction, Property } from '@activepieces/pieces-framework';
import { ibmCognosAnalyticsAuth } from '../common';

export const deleteDataSource = createAction({
  auth: ibmCognosAnalyticsAuth,
  name: 'deleteDataSource',
  displayName: 'Delete Data Source',
  description: 'Delete data source.',
  props: {},
  async run() {
    // Action logic here
  },
});
