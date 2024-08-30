import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setcategory }) => {
  return (
    <div className="Explore-Menu" id="Explore-Menu">
      <h1>Explore Our Menu</h1>
      <p className="Explore-Menu-Text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero
        tempore recusandae eum cum. Aliquam, facere a unde ut voluptate nihil
        consectetur magnam ducimus, quasi eveniet inventore quaerat excepturi
        similique.
      </p>
      <div className="Explore-Menu-List">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setcategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="Explore-Menu-List-Item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
