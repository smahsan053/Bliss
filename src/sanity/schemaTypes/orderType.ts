import { BasketIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const orderType = defineType({
    name: 'order',
    type: 'document',
    title: 'Order',
    icon: BasketIcon,
    fields: [
        defineField({
            name: 'orderNumber',
            title: 'Order Number',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
    ]
})