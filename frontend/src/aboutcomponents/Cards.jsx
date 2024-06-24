import React from "react";

const Card = ({ cardInfo }) => {
  return (
    <div className="my-4 w-full rounded-xl p-4 shadow-2xl duration-300 hover:scale-105">
      <img src={cardInfo.imageSource} alt="" className="mx-auto w-20" />
      <h2 className="py-8 text-center text-2xl font-bold">{cardInfo.title}</h2>
      <p className="text-center text-4xl font-bold">{cardInfo.price}</p>
      <div className="mt-8 text-center font-medium">
        <ol>
          <li>{cardInfo.storageCapacity}</li>
          <li>{cardInfo.usersAllowed}</li>
          <li>{cardInfo.sendUpTo}</li>
        </ol>
        <button className="w-[200px] mx-auto py-3 px-10 rounded-xl font-bold mt-4 md:text-xl transition ease-in-out hover:scale-105 bg-emerald-400 text-black hover:bg-emerald-500 active:bg-emerald-600">
          {cardInfo.buttonText || "Start trial"}
        </button>
      </div>
    </div>
  );
};

export default Card;
