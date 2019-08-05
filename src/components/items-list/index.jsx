import React from "react";
import ListItem from "../list-item";
import GridList from '@material-ui/core/GridList'

class ItemsList extends React.Component {
  render() {
    return <div>
      <GridList cellHeight={180}>
        <ListItem />
      </GridList>
    </div>
  }
}

export default ItemsList
