import {
    FaUser,
    FaFlag,
    FaStar,
    FaArrowRight,
} from "react-icons/fa";
import type { Player } from "../../Type";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";



export interface PlayerCardProps {
    Player: Player
    Coin: number,
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers:Player[]
    setSeltectedPlayers:Dispatch<SetStateAction<Player[]>>
}

const PlayerCard = ({ Player, Coin, setCoin, selectedPlayers,setSeltectedPlayers}: PlayerCardProps) => {

    const [IsSelected, setIsSelected] = useState(false)

    const HandelIsSelected = () => {
        setIsSelected(true)
        const newcoin=Coin-Player.price
        if(newcoin>=0){
            setCoin(newcoin)
            toast.success(`${Player.name} is purshed`)
        }else{
            toast.error("Coin isn't Avilable")
        }
        // logic for slected item
        setSeltectedPlayers([...selectedPlayers,Player])
    }

    return (
        <div
            key={Player.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl"
        >

            {/* Top Green Line */}
            <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400"></div>

            {/* Image Section */}
            <div className="relative mx-3 mt-3 h-[400px] overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 via-gray-100 to-green-100">

                <img
                    src={Player.image}
                    alt={Player.name}
                    className=" object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Role */}
                <div className="absolute right-3 top-3">
                    <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-md backdrop-blur">
                        {Player.role}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <FaStar className="text-yellow-400" />
                    Rating
                </div>
            </div>

            {/* Card Body */}
            <div className="p-5">

                {/* Player Name */}
                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <FaUser size={16} />
                    </div>

                    <div>
                        <h2 className="text-lg font-extrabold text-gray-900">
                            {Player.name}
                        </h2>

                        <p className="mt-0.5 text-xs text-gray-400">
                            Professional Cricketer
                        </p>
                    </div>

                </div>

                {/* Country */}
                <div className="mt-4 flex items-center gap-2">

                    <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2">
                        <FaFlag className="text-gray-400" size={13} />

                        <span className="text-sm font-medium text-gray-600">
                            {Player.country}
                        </span>
                    </div>

                </div>

                {/* Divider */}
                <div className="my-4 border-t border-dashed border-gray-200"></div>

                {/* Player Stats */}
                <div className="grid grid-cols-2 gap-3">

                    {/* Batting */}
                    <div className="rounded-xl bg-gray-50 p-3">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                            Batting
                        </p>

                        <p className="mt-1 text-sm font-bold text-gray-800">
                            {Player.battingStyle}
                        </p>
                    </div>

                    {/* Bowling */}
                    <div className="rounded-xl bg-gray-50 p-3">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                            Bowling
                        </p>

                        <p className="mt-1 text-sm font-bold text-gray-800">
                            {Player.battingStyle}
                        </p>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-5 flex items-end justify-between">

                    {/* Price */}
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                            Player Price
                        </p>

                        <p className="mt-1 text-xl font-extrabold text-emerald-600">
                            ${Player.price}
                        </p>
                    </div>

                    {/* Button */}
                    <button onClick={() => HandelIsSelected()} className="group/btn flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-600" disabled={IsSelected}>

                        {IsSelected ? "Selected" : "Choose"}

                        <FaArrowRight
                            size={12}
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        />

                    </button>

                </div>

            </div>
        </div>
    )
}

export default PlayerCard;