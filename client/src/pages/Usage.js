import classes from "./Usage.module.css";
import MainMenu from "../components/MainMenu";
import Content from "../components/Content";
import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UsagePage = ({ active, setActive }) => {
  return (
    <Fragment>
      <Header />
      <div className={classes.screen}>
        <MainMenu active={active} setActive={setActive} />
        <Content active={active} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default UsagePage;
