import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      {/* <TodoList /> */}
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
