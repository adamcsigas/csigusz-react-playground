import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import Ingredient from "./Ingredient";

export default {
    title: 'Components/QuacksOfQuedlingBurg/Ingredient',
    component: Ingredient,
    parameters: {
        docs: {
            // page: IngredientDocs,
        },
    },
} as Meta;

export const Base: ComponentStory<typeof Ingredient> = function () {
    return (
        <Ingredient />
    );
}

Base.storyName = 'Ingredient';
