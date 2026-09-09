

import type { Dispatch, SetStateAction } from "react";
import type { Player } from "../../Type";
import PlayerCard from "./PlayerCard";

export interface AvilablePlayersProps {
    Players: Player[];
    Coin: number,
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers:Player[]
    setSeltectedPlayers:Dispatch<SetStateAction<Player[]>>
}

const AvilablePlayers = ({ Players, Coin, setCoin, selectedPlayers,setSeltectedPlayers}: AvilablePlayersProps) => {
    return (
        <div className="grid grid-cols-3 gap-5">

            {Players.map((Player: Player) => (
                <PlayerCard Player={Player} key={Player.id} Coin={Coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSeltectedPlayers={setSeltectedPlayers}></PlayerCard>
            ))}

        </div>
    );
};

export default AvilablePlayers;