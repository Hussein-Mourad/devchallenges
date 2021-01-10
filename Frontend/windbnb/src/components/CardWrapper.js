import Card from "./Card.js";
import uuid from "react-uuid";

function CardWrapper({ stays }) {
  return (
    <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-5 lg:gap-10">
      {stays.map((stay) => {
        return (
          <Card
            key={uuid()}
            superHost={stay.superHost}
            title={stay.title}
            rating={stay.rating}
            type={stay.type}
            beds={stay.beds}
            photo={stay.photo}
          />
        );
      })}
    </div>
  );
}

export default CardWrapper;
