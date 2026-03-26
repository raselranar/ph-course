import { use, useState } from "react";
import axios from "axios";

import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";
const fetchData = axios.get("/data.json").then((res) => res.data);

export default function PlayerSection({ setCoins, handleBuyPlayer }) {
  const [isAvailableActive, setIsAvailableActive] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const PlayersData = use(fetchData);

  return (
    <section className="mt-22 ">
      <div className="flex justify-between mb-8 flex-col sm:flex-row gap-4">
        <h3 className="font-bold text-2xl">
          {isAvailableActive
            ? "Available Players"
            : `Selected Player (${selectedPlayers.length}/${PlayersData.length})`}
        </h3>
        <div className="">
          <button
            onClick={() => setIsAvailableActive(true)}
            className={`btn rounded-xl rounded-r-none text-gray-500 border-r-0 ${isAvailableActive && "bg-[#E7FE29] text-black"}`}>
            Available
          </button>
          <button
            onClick={() => setIsAvailableActive(false)}
            className={`btn rounded-xl rounded-l-none border-l-0 text-gray-500 ${isAvailableActive || "bg-[#E7FE29] text-black"}`}>
            {`Selected(${selectedPlayers.length})`}
          </button>
        </div>
      </div>
      {isAvailableActive ? (
        <AvailablePlayers
          PlayersData={PlayersData}
          handleBuyPlayer={handleBuyPlayer}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPlayers
          setCoins={setCoins}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        />
      )}
    </section>
  );
}
