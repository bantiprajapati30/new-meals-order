import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './mealItem/MealItem';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {

    const meals=DUMMY_MEALS.map(meal=> <MealItem key={meal.id} meal={meal} />)
    return <section className={classes.meals}>
        <Card>
        <ul>
            {meals}
            {/* {DUMMY_MEALS.map((item) => {
                return (
                   <MealItem key={item.id}
                    name={item.name} 
                    description={item.description} 
                    price={item.price}
                    />
                    // <li key={item.id}>{item.name}</li>
                )
            })} */}
        </ul>
        </Card>
       
    </section>
}
export default AvailableMeals;