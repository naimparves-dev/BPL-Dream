import type { Dispatch, SetStateAction } from "react";
import type { Player } from "../../Type";
import SelectedPlayerCard from "./SelectedPlayerCard";

export interface SelectedPlayersProps {
    selectedPlayers: Player[]
    setSeltectedPlayers: Dispatch<SetStateAction<Player[]>>
    Coin: number,
    setCoin: Dispatch<SetStateAction<number>>
}

const SelectedPlayers = ({ selectedPlayers, setSeltectedPlayers, Coin, setCoin }: SelectedPlayersProps) => {
    if (selectedPlayers.length == 0) {
        return (
            <div className="container justify-center">
                <h2 className="text-2xl font-semibold text-center">No Player Is exist</h2>
            </div>
        )
    }
    return (
        <div>
            {
                selectedPlayers.map((Player) => {
                    return (
                        <SelectedPlayerCard key={Player.id} selectedPlayers={selectedPlayers} setSeltectedPlayers={setSeltectedPlayers} Coin={Coin} setCoin={setCoin} Player={Player}></SelectedPlayerCard>
                    )
                })
            }
        </div>
    )
}

export default SelectedPlayers;