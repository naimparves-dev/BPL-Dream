import { FaTrashAlt } from "react-icons/fa";
import type { Player } from "../../Type";
import type { Dispatch, SetStateAction } from "react";

export interface SelectedPlayerCardProps {
    selectedPlayers: Player[]
    setSeltectedPlayers: Dispatch<SetStateAction<Player[]>>
    Coin: number,
    setCoin: Dispatch<SetStateAction<number>>
    Player:Player
}

const SelectedPlayerCard = ({ selectedPlayers, setSeltectedPlayers, Coin, setCoin,Player }: SelectedPlayerCardProps) => {
    const handelRemovePlayer = (Player: Player) => {
        const restPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.name !== Player.name)
        setSeltectedPlayers(restPlayers)
        const AddCoin = Coin + Player.price
        setCoin(AddCoin)
    }

    return (
        <div key={Player.id} className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg my-2.5">
            <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
                    <img src={Player.image} alt={Player.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>

                <div>
                    <h2 className="text-lg font-extrabold text-gray-900">{Player.name}</h2>
                    <h4 className="mt-1 text-sm text-gray-500">{Player.battingStyle}</h4>
                </div>
            </div>

            <button onClick={() => handelRemovePlayer(Player)} className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-400 transition-all duration-300 hover:bg-red-500 hover:text-white">
                <FaTrashAlt size={14} />
            </button>
        </div>
    )
}

export default SelectedPlayerCard;