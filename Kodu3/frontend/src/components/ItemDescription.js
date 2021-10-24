import React from "react";

function ItemDescription (props){
  return(
    <div>
      /*<p class="description">{props.description}</p>*/
      <p><em>{props.description}</em></p>
    </div>
  )
}

export default ItemDescription