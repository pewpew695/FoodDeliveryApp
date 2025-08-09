import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  // const handleClick = () => {
  //   console.log("Clicked");
  // };

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  } else {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;
    const categories =
      resInfo?.cards[4].groupedCard?.cardGroupMap.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    // console.log(resInfo?.cards[4].groupedCard?.cardGroupMap.REGULAR?.cards);

    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.categoryId}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            index={index}
            setShowIndex1={() => {
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    );
  }
};

export default RestaurantMenu;

