import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";

import { Link, withRouter } from "react-router-dom";
// import CustomizedDialogs from "../dialog-window";


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

  return recipes.map(el => {
    return (
      <Link
        to={ `/recipes/${el.key}`}
      >
        <GridListTile
          recipe={el}
          key={el.key}
          style={{
            width: 25 + "vw",
            height: 25 + "vh",
            margin: 2 + "px",
            border: 2 + "px solid black",
            position: "center"
          }}
        >
          <img src={el.photo} alt={el.photo} />
          <GridListTileBar
            title={el.title}
            subtitle={<span>{el.nutritiveValue} kcal</span>}
            actionIcon={
              <IconButton
                onClick={(e) => {
                  e.preventDefault()
                  isFavoriteChange(el.key, el.isFavorite);
                }}
              >
                {el.isFavorite ? (
                  <Favorite color="error" />
                ) : (
                  <FavoriteBorder color="error" />
                )}
              </IconButton>
            }
          />
        </GridListTile>
      </Link>
    );
  });
};

export default withRouter(ListItem);
