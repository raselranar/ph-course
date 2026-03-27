import React, { useState } from "react";
import { FaFlag, FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Player({
  player,
  handleBuyPlayer,
  setSelectedPlayers,
  selectedPlayers,
}) {
  const {
    playerName,
    playerImage,
    countryName,
    rating,
    price,
    playerRole,
    battingStyle,
    id,
  } = player;
  const isPlayerSelected = selectedPlayers.find((player) => player.id === id);

  // choose player
  const handleChoosePlayer = async () => {
    const purchased = await handleBuyPlayer(price);
    if (purchased) {
      setSelectedPlayers((prevPlayer) => [...prevPlayer, player]);
      toast(`${playerName} is selected`);
    } else toast.error("Not enough money");
  };

  return (
    <div className="card bg-base-100 shadow-sm border border-gray-300 p-6">
      <figure className="">
        <img
          className="rounded-2xl object-cover h-50"
          src={playerImage}
          alt={playerName}
        />
      </figure>
      <div className="flex flex-col gap-2 mt-6 flex-1">
        <h2 className="card-title gap-4">
          <FaUserAlt color="gray" size="1.3em"></FaUserAlt> {playerName}
        </h2>
        <div className="flex  justify-between flex-wrap gap-2">
          {/* country */}
          <div className="flex gap-3">
            <FaFlag color="gray" size="1.3em"></FaFlag>
            <span className="text-gray-400">{countryName}</span>
          </div>
          {/* Player Role */}
          <div className="badge badge-outline badge-primary">{playerRole}</div>
        </div>
        <div className="divider flex-1"></div>

        {/* Ratings */}
        <p className="font-bold">Rating: {rating}</p>
        <div className="flex justify-between">
          <p className="font-semibold">Batting Style</p>
          <p className="text-gray-400">{battingStyle}</p>
        </div>

        <div className="card-actions justify-between items-center">
          <p className="font-semibold">Price: $ {price}</p>
          <button
            onClick={handleChoosePlayer}
            className="btn rounded-lg self-end"
            disabled={isPlayerSelected}>
            {isPlayerSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
}
