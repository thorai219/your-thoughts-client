import LeftMenu from "./components/LeftMenu";
import Nav from "./components/Nav";
import RightMenu from "./components/RightMenu";
import SideBar from "./components/areas/sidebar/SideBar";
import Main from "./components/areas/Main";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <RightMenu />
      <SideBar />
      <Main />
      <LeftMenu />
    </div>
  );
}

export default App;
