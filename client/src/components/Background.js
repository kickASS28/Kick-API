import classes from "./Background.module.css";

const Background = ({ title, children }) => {
  return (
    <div className={classes.screen}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Background;
