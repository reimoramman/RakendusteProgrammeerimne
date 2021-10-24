import React from "react";
import ItemDescription from "./ItemDescription";

function Item (props){
  return(
    <div>
      <h1>{props.name}</h1>
        <ItemDescription description = {props.description} />
    </div>
  )
}

export default Item