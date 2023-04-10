import _ from "lodash";
import { IngredientBook } from "../types/GameEntities";
import { BOOK_SET_VALUES, INGREDIENT_BOOK_NAMES } from "../constants/gameEntities";

function getBookSetValue() {
    const randomBookSetValue = _.sample(BOOK_SET_VALUES);
    if (!randomBookSetValue) {
        return 1;
    }

    return randomBookSetValue;
}

export function generateIngredientBooks(): IngredientBook[] {
    return INGREDIENT_BOOK_NAMES.map(ingredientBookName => {
        return {
            name: ingredientBookName,
            bookSet: getBookSetValue(),
        };
    });
}

function saveDataToLocalStorage() {}
