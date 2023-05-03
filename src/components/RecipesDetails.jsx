import React from 'react';

const RecipesDetails = ({recipeCard}) => {
    return (
        <div>
            <img src={recipeCard[0].recipe_img} alt="" />
        </div>
    );
};

export default RecipesDetails;