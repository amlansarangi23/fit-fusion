import React from "react";
import SingleUserImage from "../assets/single_user.png";
import PartnershipImage from "../assets/partnership.png";
import GroupAccountImage from "../assets/group_account.png";

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
        <Button text="Start trial" className="w-[200px] mx-auto py-3 px-10 rounded-xl font-bold mt-4 md:text-xl transition ease-in-out hover:scale-105 bg-slate-800 text-white" />
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="w-full bg-white px-4 py-10">
      <div className="mx-auto grid max-w-screen-xl gap-8 md:grid-cols-3">
        {/* Hardcoded cards */}
        <Card
          cardInfo={{
            imageSource: SingleUserImage,
            title: "Single User",
            price: "$149",
            storageCapacity: "500 GB Storage",
            usersAllowed: "1 Granted User",
            sendUpTo: "Send up to 2 GB",
          }}
        />
        <Card
          cardInfo={{
            imageSource: PartnershipImage,
            title: "Partnership",
            price: "$199",
            storageCapacity: "1 TB Storage",
            usersAllowed: "3 Users Allowed",
            sendUpTo: "Send up to 10 GB",
          }}
        />
        <Card
          cardInfo={{
            imageSource: GroupAccountImage,
            title: "Group Account",
            price: "$299",
            storageCapacity: "5 TB Storage",
            usersAllowed: "10 Users Allowed",
            sendUpTo: "Send up to 20 GB",
          }}
        />
      </div>
    </div>
  );
};

export default Cards;
