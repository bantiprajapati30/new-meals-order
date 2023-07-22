
import React, { useRef, useState } from 'react'
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


function MealItemForm(props) {
    console.log('props: ', props);
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef()


    const submitHandler = event => {
        event.preventDefault();
        const enterAmount = amountInputRef.current.value;
        const enterAmountNumber = +enterAmount;

        if (enterAmount.trim().length === 0 || enterAmountNumber < 1 || enterAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(enterAmountNumber);

    };
    if (props.hide) {
        return null;
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>number should be (0 to 5)</p>}
        </form>
    )
}

export default MealItemForm
