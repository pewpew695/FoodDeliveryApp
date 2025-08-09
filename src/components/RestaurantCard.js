import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("Hello");
  const { loggedInUser } = useContext(UserContext);

  const { name, cloudinaryImageId, cuisines, costForTwo, sla, avgRating } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg h-[440px] hover:border border-blue-500"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="rounded-lg h-50 w-full"
        alt="Restaurant Logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    console.log("Promoted");
    console.log(props);
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
