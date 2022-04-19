import classes from "./Content.module.css";
import Colors from "./documentation/Colors";
import ColorsUI from "./documentation/ColorsUI";
import Meals from "./documentation/Meals";
import Users from "./documentation/Users";
const Content = ({ active }) => {
  return (
    <div className={classes.content}>
      <h3>{active}</h3>
      {active === "Users API" && <Users />}
      {active === "Meals API" && <Meals />}
      {active === "Colors API" && <Colors />}
      {active === "Colors UI" && <ColorsUI />}
    </div>
  );
};

export default Content;
