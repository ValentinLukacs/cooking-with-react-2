import React from 'react'
import IngredientList from './IngredientList'

export default function Recipe(props) {
    // das es übersichtlicher bleibt, wir hier definiert was übergeben wird
    const {
        name, 
        cookTime, 
        servings, 
        instructions,
        ingredients
    } = props
    // hier ist der part was ausgespielt wird
    return (
    <div>
        <div>
            <h3>{name}</h3>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        <div>
            <span>Cook Time: </span>
            <span>{cookTime}</span>
        </div>
        <div>
            <span>Servings:</span>
            <span>{servings}</span>
        </div>
        <div>
            <span>Instructions:</span>
            <div>{instructions}</div>
        </div>
        <div>
            <span>Ingredients:</span>
            <div>
                <IngredientList ingredients={ingredients} />
            </div>
        </div>

    </div>
  )
}
