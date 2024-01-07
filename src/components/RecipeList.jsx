import Recipe from "./Recipe";
import { recipes } from "../functions/recipes";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe
          name={recipe.name}
          id={recipe.id}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}
