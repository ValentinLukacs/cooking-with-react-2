import React from 'react'
import Recipe from './Recipe'
export default function RecipeList({ recipes }) {
  return (
    <div className='recipe-list'>
    <div>
     {recipes.map(recipe => {
        return (
            <Recipe 
                key={recipe.id} 
                // mit dieser methode kann man alle variabeln übergeben
                {...recipe}
            />
        )
        })}
         
    </div>
    <div className='recipe-list__add-recipe-btn-container'>
      <button className='btn btn--primary'>Add Recipe</button>
    </div>
    </div>
  )
  
}
