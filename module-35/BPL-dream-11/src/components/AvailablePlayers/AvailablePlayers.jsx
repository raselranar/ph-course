import React, { Suspense } from "react";
import Player from "./Player";

export default function AvailablePlayers({
  handleBuyPlayer,
  setSelectedPlayers,
  PlayersData,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}>
        {PlayersData.map((player) => (
          <Player
            handleBuyPlayer={handleBuyPlayer}
            key={player.id}
            player={player}
            setSelectedPlayers={setSelectedPlayers}></Player>
        ))}
      </Suspense>
    </div>
  );
}
