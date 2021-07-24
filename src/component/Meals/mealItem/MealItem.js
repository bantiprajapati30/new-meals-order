import React from 'react'
function MealItem(props) {
    return (
       <li>
           <div><h2>{props.name}</h2></div>
           <div><p>{props.description}</p></div>
           <div><p>{props.itemPrice}</p></div>
       </li>
    )
}

export default MealItem
