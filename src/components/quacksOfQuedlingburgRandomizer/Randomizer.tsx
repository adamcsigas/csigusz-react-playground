import React, { useState } from 'react';
import { generateIngredientBooks } from "./helpers/generateIngredientBooks";
import IngredientBook from "./UI/IngredientBook/IngredientBook";
import {BookSetValue, IngredientBookName} from "./types/GameEntities";
import classes from './Randomizer.module.css';

interface IngredientBooksList {
    [key: string]: {
        name: IngredientBookName;
        bookSet: BookSetValue;
    };
}

const Randomizer = () => {
    const [ingredientBooks, setIngredientBooks] = useState<any>({});

    const handleClick = () => {
        const ingredientBooks = generateIngredientBooks();
        setIngredientBooks(ingredientBooks);
    };

    const RandomizedSetOfBookList = () => {
        return Object.keys(ingredientBooks).map(key => {
            const { name, bookSet } = ingredientBooks[key];
                return (
                    <IngredientBook key={key} ingredientName={name} ingredientValue={bookSet} />
                );
            }
        );
    };

    return(
        <div className={classes.randomizerContainer}>
            <button className={classes.randomizerButton} onClick={handleClick}>Randomize</button>
            <div className={classes.break} />
            {RandomizedSetOfBookList()}
        </div>
    );
};

export default Randomizer;
