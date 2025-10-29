
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
export const newOrder = createTrigger({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'newOrder',
    displayName: 'New Order',
    description: 'Triggers when a new order is created.',
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