import classes from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaComment, FaUser, FaBook, FaBars } from "react-icons/fa";
import { Fragment, useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [mobNavVisible, setMobNavVisible] = useState(false);

  const handleMobileNavVisibility = () => {
    setMobNavVisible(!mobNavVisible);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div
          className={classes.logo}
          onClick={() => {
            navigate("/", { replace: false });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={38}
          >
            <title>KICK-API</title>
            <circle
              cx="128"
              cy="96"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <circle
              cx="256"
              cy="416"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M256 256v112"
            />
            <circle
              cx="384"
              cy="96"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              d="M128 144c0 74.67 68.92 112 128 112M384 144c0 74.67-68.92 112-128 112"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
          <span className={classes.title}>KICK-API</span>
        </div>
        <nav className={classes.nav}>
          <ul className={classes.menuList}>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/"
              >
                {" "}
                <FaHome size={23} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/usage"
              >
                <FaBook size={23} />
                Usage
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/community"
              >
                <FaComment size={23} />
                Community
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/auth"
              >
                <FaUser size={23} />
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.logo2} onClick={handleMobileNavVisibility}>
          <FaBars size={26} />
        </div>
      </header>
      {mobNavVisible && (
        <nav className={classes.mobnav}>
          <ul className={classes.menuList}>
            <li onClick={handleMobileNavVisibility}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.mobactive : ""
                }
                to="/"
              >
                {" "}
                <FaHome size={23} />
                Home
              </NavLink>
            </li>
            <li onClick={handleMobileNavVisibility}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.mobactive : ""
                }
                to="/usage"
              >
                <FaBook size={23} />
                Usage
              </NavLink>
            </li>
            <li onClick={handleMobileNavVisibility}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.mobactive : ""
                }
                to="/community"
              >
                <FaComment size={23} />
                Community
              </NavLink>
            </li>
            <li onClick={handleMobileNavVisibility}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.mobactive : ""
                }
                to="/auth"
              >
                <FaUser size={23} />
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

export default Header;
