import { ComponentStory } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import IngredientBook from "./IngredientBook";
import { BOOK_SET_VALUES, INGREDIENT_BOOK_NAMES } from "../../constants/gameEntities";

export default {
    title: 'Components/QuacksOfQuedlingBurg/UI/IngredientBook',
    component: IngredientBook,
    argTypes: {
        ingredientName: {
            control: {
                type: 'select',
                options: [...INGREDIENT_BOOK_NAMES],
            },
            defaultValue: INGREDIENT_BOOK_NAMES[0],
        },
        ingredientValue: {
            control: {
                type: 'select',
                options: [...BOOK_SET_VALUES],
            },
            defaultValue: BOOK_SET_VALUES[0],
        }
    },
    parameters: {
        docs: {
            // page: IngredientDocs,
        },
    },
} as Meta;

export const Base: ComponentStory<typeof IngredientBook> = function (args) {
    const { ingredientName, ingredientValue } = args;
    return (
        <IngredientBook ingredientName={ingredientName} ingredientValue={ingredientValue} />
    );
}

Base.storyName = 'IngredientBook';
