import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("Hello");
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    sla,
    avgRating,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="Arabian Treat Food"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
