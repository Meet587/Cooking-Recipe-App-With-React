import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({ recipes, searchResult }) {
  const { handleRecipeAdd } = useContext(RecipeContext)

  return (
    <div className="recipe-list">
      {recipes
				.filter(recipe => recipe.name.toLowerCase().search(searchResult.toLowerCase()) !== -1)
				.map(recipe => <Recipe key={recipe.id} {...recipe} />)}

      <div className="recipe-list__add-recipe-btn-container">
        <button
          className="btn btn--primary"
          onClick={handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div>
    </div>
  )
}