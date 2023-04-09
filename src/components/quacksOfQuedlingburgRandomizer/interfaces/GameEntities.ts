import _ from 'lodash';

const INGREDIENT_BOOK_NAMES = [
    'Crow Skull',
    'Toadstool',
    'Mandrake',
    'Garden Spider',
    'Ghost\'s Breath',
    'Locoweed',
] as const;
type IngredientBookName = typeof INGREDIENT_BOOK_NAMES[number];

const SPECIAL_INGREDIENT_BOOK_NAMES = [
    'Pumpkin',
    'African Death\'s Head Hawkmoth',
];
type SpecialIngredientBookName = typeof SPECIAL_INGREDIENT_BOOK_NAMES[number];

const BOOK_SET_VALUES = [1, 2, 3, 4, 5, 6];
type BookSetValue = typeof BOOK_SET_VALUES[number];

const EXTENSIONS = [
    'The Herb Witches',
    'The Alchemists',
];
type Extensions = typeof EXTENSIONS[number];

export type IngredientBook = {
    name: IngredientBookName,
    bookSet: BookSetValue,
    requiredExtensions?: Extensions[],
}

function getBookSetValue() {
    const randomBookSetValue = _.sample(BOOK_SET_VALUES);
    if (!randomBookSetValue) {
        return 1;
    }

    return randomBookSetValue;
}

function generateIngredientBooks(): IngredientBook[] {
    return INGREDIENT_BOOK_NAMES.map(ingredientBookName => {
        return {
            name: ingredientBookName,
            bookSet: getBookSetValue(),
        };
    });
}

function saveDataToLocalStorage() {}
