import { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './mealItem/MealItem';
import Spinner from '../UI/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getMealsList } from '../../actions/action';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const dispatch = useDispatch()

  const order = useSelector(state => state.meals)
  useEffect(() => {
    dispatch(getMealsList())
  }, [])
  useEffect(() => {
    fetchMeals();
  }, [order.data])
  const fetchMeals = () => {
    const loadedData = [];
    const responseData = order.data
    console.log('responseData: ', responseData);
    if (!order.laoding) {
      for (const key in responseData) {
        loadedData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: Number(responseData[key].price),
          visible: responseData[key].visible
        });
      }
      setMeals(loadedData);
    }

  }

  const getMeals = meals.map(meal => meal.visible && <MealItem key={meal.id} id={meal.id} description={meal.description} name={meal.name} price={meal.price} />)
  return <section className={classes.meals}>
    <Card>
      <ul>
        <div className={classes.loader}>
          {order.laoding && <Spinner />}
        </div>
        {getMeals}
      </ul>

    </Card>

  </section>
}
export default AvailableMeals;