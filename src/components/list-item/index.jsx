import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const ListItem = props => {
  const recipes = props.recipes;

  console.log(recipes);

  return recipes.map(el => {
    return (
      <GridListTile key={el.key} style={{width: 33 + "%"}}>
          <img
            src={el.photo}
            alt={el.photo}
          />
          <GridListTileBar
            title={el.title}
            subtitle={<span>{el.nutritiveValue} kcal</span>}
            actionIcon={
              <IconButton>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
    );
  });
};

export default ListItem;
