import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserProfileSetType } from "../../../store/user/reducer";
import { AppState } from "../../../store/AppState";

import Registration from "../../auth/Registration";
import Login from "../../auth/Login";
import Logout from "../../auth/Logout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRegistered,
  faUser,
  faSignInAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const SideBarMenus = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        username: "testUser",
      },
    });
  }, [dispatch]);

  const onClickRegister = () => {
    setShowRegister(!showRegister);
  };

  const onClickLogin = () => {
    setShowLogin(!showLogin);
  };

  const onClickLogout = () => {
    setShowLogout(!showLogout)
  }

  return (
    <>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">{user?.username}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span className="menu-name" onClick={onClickRegister}>
            Register
          </span>
          <Registration isOpen={showRegister} onClickToggle={onClickRegister} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span className="menu-name" onClick={onClickLogin}>
            Login
          </span>
          <Login isOpen={showLogin} onClickToggle={onClickLogin} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className="menu-name" onClick={onClickLogout}>Logout</span>
          <Logout 
            isOpen={showLogout}
            onClickToggle={onClickLogout}
          />
        </li>
      </ul>
    </>
  );
};

export default SideBarMenus;
