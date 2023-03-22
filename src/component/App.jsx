import React, { useState, useEffect } from 'react';
import Header from './Header';
import RecipeList from './RecipeList'
import '../css/app.css'
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

export default function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(sampleRecipes)
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const recipeContextValue = {
    handleRecipeAdd: handleRecipeAdd,
    handleRecipeDelete: handleRecipeDelete,
    handleRecipeSelect: handleRecipeSelect,
    handleRecipeChange: handleRecipeChange
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: Date.now()*0.234,
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: Date.now()*5.634, name: '', amount: '' }
      ]
    }

    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      {/* <Header recipes={recipes} /> */}
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  )
  
}


const sampleRecipes = [
  {
    id: 1,
    name: 'Dal Rice',
    servings: 3,
    cookTime: '3:45',
    instructions: "1. Boil the Tuver Dal\n2. Fry the boiled dal\n3. boil the rice",
    recipemadeby: 'Meet',
    ingredients: [
      {
        id: 1,
        name: 'tuver dal',
        amount: '2 cups'
      },
      {
        id: 2,
        name: 'rice',
        amount: '1 cups'
      }
    ]
  },
  {
    id: 2,
    name: 'Dal JiraRice',
    servings: 5,
    cookTime: '5:45',
    instructions: "1. Boil the Tuver Dal and rice\n2. Fry the boiled dal\n3. fry rice with jira",
    recipemadeby: 'Jatin',
    ingredients: [
      {
        id: 1,
        name: 'jira',
        amount: '3 Tbs'
      },
      {
        id: 2,
        name: 'rice',
        amount: '2 cups'
      }
    ]
  }
]