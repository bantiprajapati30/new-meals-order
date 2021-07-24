import React from 'react'
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


function MealItemForm(props) {
    return (
       <form className={classes.form}>
           <Input label="Ammount" 
           input={{
            id:'amount_'+props.id,
            type: 'number',
            min:'1',
            max:'5',
            step: '1',
            defaultValue: '1'
           }}/>
           <button>+ Add</button>
       </form>
    )
}

export default MealItemForm
