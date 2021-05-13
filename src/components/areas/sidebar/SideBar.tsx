import SideBarMenus from "./SideBarMenus";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

const SideBar = () => {
  const { width } = useWindowDimensions();
  if (width <= 768) {
    return null;
  }

  return (
    <div className="sidebar">
      <SideBarMenus />
    </div>
  );
};

export default SideBar;
