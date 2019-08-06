import React from "react";
import ListItem from "../list-item";
import GridList from "@material-ui/core/GridList";

const ItemsList = props => (
  <div>
    <GridList cellHeight={180}>
      <ListItem recipes={props.recipes} />
    </GridList>
  </div>
);

export default ItemsList;
