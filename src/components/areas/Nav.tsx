import { KeyboardEvent, MouseEvent, useState } from "react";
import ReactModal from "react-modal";
import SideBarMenus from "./sidebar/SideBarMenus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowDimensions();
  const getMobileMenu = () => {
    if (width <= 768) {
      return (
        <FontAwesomeIcon
          onClick={onClickToggle}
          icon={faBars}
          size="lg"
          className="nav-mobile-menu"
        />
      );
    }
    return null;
  };

  const onClickToggle = (e: MouseEvent): void => {
    setShowMenu(!showMenu);
  };

  const onRequestClose = (e: KeyboardEvent | MouseEvent): void => {
    setShowMenu(false);
  };

  return (
    <>
      <ReactModal
        className="modal-menu"
        isOpen={showMenu}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
      >
        <SideBarMenus />
      </ReactModal>
      <nav className="navigation">
        {getMobileMenu()}
        <strong>YourThoughts</strong>
      </nav>
    </>
  );
};

export default Nav;
