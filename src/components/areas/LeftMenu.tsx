import { useState, useEffect } from "react";
import { getCategories } from "../services/DataService";
import Category from "../models/Category";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import "./LeftMenu.css";

const LeftMenu = () => {
  const [categories, setCategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );
  const { width } = useWindowDimensions();

  useEffect(() => {
    getCategories()
      .then((categories: Array<Category>) => {
        const cats = categories.map((cat) => {
          return <li key={cat.id}>{cat.name}</li>;
        });
        setCategories(<ul className="category">{cats}</ul>);
      })
      .catch((err) => console.log(err));
  }, []);

  if (width <= 768) {
    return null;
  }

  return <div className="leftmenu">{categories}</div>;
};

export default LeftMenu;
