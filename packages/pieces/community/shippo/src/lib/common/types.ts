import { OrderCreateRequest } from 'shippo/models/components';
import {
  ListOrdersRequest,
  ListTransactionsRequest,
} from 'shippo/models/operations';

export interface AuthenticationParams {
  apiKey: string;
}

export interface OrderCreateParams
  extends AuthenticationParams,
    OrderCreateRequest {}

export interface ListOrdersParams
  extends AuthenticationParams,
    ListOrdersRequest {}

export interface ListShippingLabelsParams
  extends AuthenticationParams,
    ListTransactionsRequest {}
