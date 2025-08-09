import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  //   console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 pr-3 m-2 border-b-2 border-gray-200 text-left flex justify-between gap-1.5"
        >
          <div className="py-2 w-9/12">
            <span>{item.card.info.name}</span>
            <span> - ₹ {item.card.info.price / 100}</span>
            <p className="pt-2 text-xs">{item.card.info.description}</p>
          </div>
          {item.card.info.imageId && (
            <div className="w-3/12">
              <div className="absolute">
                <button className="p-2 my-16 rounded-lg bg-black text-white shadow-lg">
                  Add +
                </button>
              </div>

              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-25 rounded-xl"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
