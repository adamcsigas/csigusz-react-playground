import React from 'react';
import classes from './IngredientBook.module.css';
import { BookSetValue, IngredientBookName } from "../../types/GameEntities";

type IngredientBookProps = {
    ingredientName: IngredientBookName,
    ingredientValue: BookSetValue,
};
const IngredientBook = (props: IngredientBookProps) => {
    const { ingredientName, ingredientValue } = props;
    return(
            <div className={classes.ingredientContainer}>
                <div className={classes.ingredientName}>
                    {ingredientName}
                </div>
                <div className={classes.break} />
                <div className={classes.ingredientValue}>
                    {ingredientValue}
                </div>
            </div>
    )
};

export default IngredientBook;
