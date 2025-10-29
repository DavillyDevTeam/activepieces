import { createAction, Property } from '@activepieces/pieces-framework';
import { shippoAuth } from '../common';

export const createOrder = createAction({
  auth: shippoAuth,
  name: 'createOrder',
  displayName: 'Create Order',
  description: 'Creates a new order in Shippo.',
  props: {
    currency: Property.ShortText({
      displayName: 'Currency',
      required: false,
    }),
    notes: Property.ShortText({
      displayName: 'Notes',
      required: false,
    }),
    order_number: Property.ShortText({
      displayName: 'Order Number',
      required: false,
    }),
    order_status: Property.StaticDropdown({
      displayName: 'Order Status',
      required: false,
      options: {
        options: [
          {"label": "Unknown", "value": "UNKNOWN" },
          {"label": "Awaitpay", "value": "AWAITPAY"}
          Paid: "PAID",
          Refunded: "REFUNDED",
          Cancelled: "CANCELLED",
          PartiallyFulfilled: "PARTIALLY_FULFILLED",
          Shipped: "SHIPPED",
        ],
      },
    }),
    placed_at: Property.ShortText({
      displayName: 'Placed At',
      required: true,
    }),
    shipping_cost: Property.ShortText({
      displayName: 'Shipping Cost',
      required: false,
    }),
    shipping_cost_currency: Property.ShortText({
      displayName: 'Shipping Cost Currency',
      required: false,
    }),
    shipping_method: Property.ShortText({
      displayName: 'Shipping Method',
      required: false,
    }),
    subtotal_price: Property.ShortText({
      displayName: 'Subtotal Price',
      required: false,
    }),
    total_price: Property.ShortText({
      displayName: 'Total Price',
      required: false,
    }),
    total_tax: Property.ShortText({
      displayName: 'Total Tax',
      required: false,
    }),
    weight: Property.ShortText({
      displayName: 'Weight',
      required: false,
    }),
    weight_unit: Property.ShortText({
      displayName: 'Weight Unit',
      required: false,
    }),
    from_address: Property.DynamicProperties({
      displayName: 'From Address',
      required: false,
      refreshers: [],
      props: async (propsValue) => {
        // TODO
      }
    }),
  },
  async run() {
    // Action logic here
  },
});
