import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://react-http-9191f-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch meals!");
        }
        const responseData = await response.json();
        const loadedMeals = [];
        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
        setMeals(loadedMeals);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(
          "Failed to load meals. Please check your connection and try again."
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);
  if (isLoading) {
    return (
      <section className={classes.meals}>
        <Card>
          <p className={classes.loading}>Loading meals...</p>
        </Card>
      </section>
    );
  }
  if (error) {
    return (
      <section className={classes.meals}>
        <Card>
          <p className={classes.error}>{error}</p>
        </Card>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
