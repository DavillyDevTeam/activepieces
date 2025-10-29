import { PieceAuth } from '@activepieces/pieces-framework';
import { Shippo } from 'shippo';
import {
  ListOrdersParams,
  ListShippingLabelsParams,
  OrderCreateParams,
} from './types';

export const shippoAuth = PieceAuth.SecretText({
  displayName: 'API Key',
  description: 'Please provide your Shippo API Key.',
  required: true,
});

export const shippoCommon = {
  getClient: (apiKey: string) =>
    new Shippo({
      apiKeyHeader: `${apiKey}`,
    }),
  createOrder: async ({ apiKey, ...orderParams }: OrderCreateParams) => {
    const shippo = shippoCommon.getClient(apiKey);
    return await shippo.orders.create(orderParams);
  },
  listOrders: async ({ apiKey, ...orderParams }: ListOrdersParams) => {
    const shippo = shippoCommon.getClient(apiKey);
    return await shippo.orders.list(orderParams);
  },
  listShippingLabels: async ({
    apiKey,
    ...shippingLabelParams
  }: ListShippingLabelsParams) => {
    const shippo = shippoCommon.getClient(apiKey);
    return await shippo.transactions.list(shippingLabelParams);
  },
};
