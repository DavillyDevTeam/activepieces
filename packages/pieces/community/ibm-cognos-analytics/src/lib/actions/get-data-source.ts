import { createAction, Property } from '@activepieces/pieces-framework';
import { ibmCognosAnalyticsAuth } from '../common';

export const getDataSource = createAction({
  auth: ibmCognosAnalyticsAuth,
  name: 'getDataSource',
  displayName: 'Get Data Source',
  description: 'Retrieve the details of a specific Data Source.',
  props: {},
  async run() {
    // Action logic here
  },
});
