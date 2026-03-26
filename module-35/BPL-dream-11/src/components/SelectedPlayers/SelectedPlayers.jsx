import React from "react";
import { MdDelete } from "react-icons/md";

export default function SelectedPlayers({
  selectedPlayers,
  setSelectedPlayers,
  setCoins,
}) {
  const handleDelSelectedPlayer = ({ playerName, price }) => {
    const filteredPlayer = selectedPlayers.filter(
      (player) => player.playerName !== playerName,
    );
    setSelectedPlayers(filteredPlayer);
    setCoins((prevCoins) => prevCoins + price);
  };
  return (
    <div>
      {selectedPlayers.length === 0 ? (
        <div className="h-54 flex items-center justify-center">
          <h3 className="text-4xl  text-gray-400">No Player Selected</h3>
        </div>
      ) : (
        <ul className="list bg-base-100 rounded-box shadow-md gap-4">
          {selectedPlayers.map(
            ({ playerName, playerImage, battingStyle, price }) => (
              <li className="list-row border border-gray-300/80 bg-base-200">
                <div>
                  <img className="size-10 rounded-box" src={playerImage} />
                </div>
                <div>
                  <div className="text-lg">{playerName}</div>
                  <div className="font-semibold opacity-60">{battingStyle}</div>
                </div>
                <button
                  onClick={() => handleDelSelectedPlayer({ playerName, price })}
                  className="btn btn-circle hover:btn-error hover:text-white transition-colors">
                  <MdDelete className=" size-6" />
                </button>
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
}
