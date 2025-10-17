import { PieceAuth } from '@activepieces/pieces-framework';

export const ibmCognosAnalyticsAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  required: true,
  description: 'The API Key for IBM Cognos Analytics.',
});
