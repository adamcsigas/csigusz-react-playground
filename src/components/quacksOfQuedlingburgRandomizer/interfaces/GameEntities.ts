import {
    BOOK_SET_VALUES,
    INGREDIENT_BOOK_NAMES,
    SPECIAL_INGREDIENT_BOOK_NAMES,
    EXTENSIONS,
} from "../constants/gameEntities";

type IngredientBookName = typeof INGREDIENT_BOOK_NAMES[number];
type SpecialIngredientBookName = typeof SPECIAL_INGREDIENT_BOOK_NAMES[number];
type BookSetValue = typeof BOOK_SET_VALUES[number];
type Extensions = typeof EXTENSIONS[number];

export type IngredientBook = {
    name: IngredientBookName,
    bookSet: BookSetValue,
    requiredExtensions?: Extensions[],
}
