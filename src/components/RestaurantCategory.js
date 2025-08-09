import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex1 }) => {
  //   console.log(data.title);
  //   console.log("Category");
  //   const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex1(true);
  };

  return (
    <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{" ▼"}</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
