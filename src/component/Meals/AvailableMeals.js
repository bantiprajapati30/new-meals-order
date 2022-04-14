import { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './mealItem/MealItem';
import Spinner from '../UI/Spinner';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loader, setLoader] = useState(false)
    useEffect(()=> {
        setLoader(true)
    const fetchMeals = async ()=> {
        
        const response = await fetch(
          "https://food-meals-db217-default-rtdb.firebaseio.com/meals.json"
        );
        const responseData = await response.json();

        const loadedData = [];

        for (const key in responseData) {
          loadedData.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
        setMeals(loadedData);
        setLoader(false);
    }
    setTimeout(() => {
        fetchMeals();    
    }, 1000);
    
    }, [])


    const getMeals=meals.map(meal=> <MealItem key={meal.id} id={meal.id} description={meal.description} name={meal.name} price={meal.price}/>)
    return <section className={classes.meals}>
       
        <Card>
        <ul>
            <div className={classes.loader}>
            {loader && <Spinner />}
            </div>
        
            {getMeals}
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