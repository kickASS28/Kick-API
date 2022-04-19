import classes from "./HomePage.module.css";
import Background from "../components/Background";
import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = ({ active, setActive }) => {
  return (
    <Fragment>
      <Header />
      <Background title="Welcome">
        <p className={classes.details}>
          Purpose of this API is to provide dummy placeholder data to the
          developers in need to test and build their apps. This API works on
          NodeJS to process realtime requests at lightning fast speed in non
          blocking way, Enjoy coding.
        </p>
        <h3>Available Data</h3>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Functionality</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Users API</td>
              <td>
                This API Route provides Dummy user data to simulate app
                functionalities
                <br /> like login, signin, and registrations.
              </td>
            </tr>
            <tr>
              <td>Meals API</td>
              <td>
                This API Route responds with the data about different exotic
                meals, their <br />
                ingredients as well as steps to cook them.
              </td>
            </tr>
            <tr>
              <td>Colors API</td>
              <td>
                This API Route provides RGB and HSL data of the requested
                Colors.
              </td>
            </tr>
            <tr>
              <td>Colors UI</td>
              <td>
                This API Route renders simple HTML page containing the RGB and
                HSL details.
              </td>
            </tr>
          </tbody>
        </table>
      </Background>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
