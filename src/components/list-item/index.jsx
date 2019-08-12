import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";

import { Link, withRouter } from "react-router-dom";
import CustomizedDialogs from "../dialog-window";


const ListItem = props => {
  const recipes = props.recipes;
  const refresh = props.refresh;

  const isFavoriteChange = (key, isFavorite) => {
    fetch(`https://jfddl8-harmonylublin.firebaseio.com/recipes/${key}.json`, {
      method: "PATCH",
      body: JSON.stringify({
        isFavorite: !isFavorite
      })
    }).then(() => refresh());
  };

  return recipes.map(recipe => {
    return (
      <div>
        <CustomizedDialogs
          open={recipe.key === props.match.params.recipeKey}
          onClose={() => props.history.push('/recipes')}
          recipe={recipe}
        />
        <Link
          to={`/recipes/${recipe.key}`}
        >
          <GridListTile
            recipe={recipe}
            key={recipe.key}
            style={{
              width: 25 + "vw",
              height: 25 + "vh",
              margin: 2 + "px",
              border: 2 + "px solid black",
              position: "center"
            }}
          >
            <img src={recipe.photo} alt={recipe.photo} />
            <GridListTileBar
              title={recipe.title}
              subtitle={<span>{recipe.nutritiveValue} kcal</span>}
              actionIcon={
                <IconButton
                  onClick={(e) => {
                    e.preventDefault()
                    isFavoriteChange(recipe.key, recipe.isFavorite);
                  }}
                >
                  {recipe.isFavorite ? (
                    <Favorite color="error" />
                  ) : (
                      <FavoriteBorder color="error" />
                    )}
                </IconButton>
              }
            />
          </GridListTile>
        </Link>
      </div>
    );
  });
};

export default withRouter(ListItem);
