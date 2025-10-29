
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
export const newShippingLabel = createTrigger({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'newShippingLabel',
    displayName: 'New Shipping Label',
    description: 'Triggers when a new shipping label is created.',
    props: {},
    sampleData: {},
    type: TriggerStrategy.WEBHOOK,
    async onEnable(context){
        // implement webhook creation logic
    },
    async onDisable(context){
        // implement webhook deletion logic
    },
    async run(context){
        return [context.payload.body]
    }
})