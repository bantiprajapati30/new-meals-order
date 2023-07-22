import React from 'react';
import classes from './Add.module.css';
import headerClasses from '../Layout/Header.module.css';
import Profile from '../Layout/Dropdown';
import AddMeals from './AddMeals';
import AvailableMeals from './AvailableMeals';
import { Container } from 'reactstrap';
import MealItem from './mealItem/MealItem';
import MealItemForm from './mealItem/MealItemForm';

function ManageMeals(props) {
    return (
        <div className={`${classes.container} mt-5 pt-5 `}>
            <div className={`${headerClasses.header}`}>
                <h1>Manage Meals</h1>
                <Profile />
            </div>
            <Container>
                <AddMeals />
                <AvailableMeals>
                    <MealItem>
                        <MealItemForm hide={true} />
                    </MealItem>

                </AvailableMeals>
            </Container>

        </div>
    );
}

export default ManageMeals;