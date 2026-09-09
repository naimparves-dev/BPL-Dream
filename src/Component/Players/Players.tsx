import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Player } from "../../Type";
import AvilablePlayers from "./AvilablePlayers";
import SelectedPlayers from "./SelectedPlayers";

export interface PlayersProps {
    PlayerPormise: Promise<Player[]>
    Coin:number,
    setCoin:Dispatch<SetStateAction<number>>
}

const Players = ({ PlayerPormise,Coin,setCoin }: PlayersProps) => {
    const Players = use(PlayerPormise)
    
    const [ButtonType, setButtontype]=useState("avilable")
    const [selectedPlayers, setSeltectedPlayers]=useState<Player[]>([])

    const handelButton =(Type:"avilable"|"selected")=>{
        setButtontype(Type) 
    }

    return (

        <div className="container mx-auto mt-6">
            <div className="flex justify-between mb-9">
                <h2 className="font-bold text-3xl">{ButtonType==="avilable"?"Avilable Player":`Selected Players: ${selectedPlayers.length}`}</h2>
                <div className="flex">
                    <button onClick={()=> handelButton("avilable")} className={`btn ${ButtonType==="avilable"?"btn-success":''} rounded-r-none`}>Avilable</button>
                    <button onClick={()=> handelButton("selected")} className={`btn ${ButtonType==="selected"?"btn-success":''} rounded-r-none`}>Selected</button>
                </div>

            </div>
            {ButtonType==="avilable"? <AvilablePlayers Players={Players} Coin={Coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSeltectedPlayers={setSeltectedPlayers}></AvilablePlayers>:<SelectedPlayers selectedPlayers={selectedPlayers} setSeltectedPlayers={setSeltectedPlayers} Coin={Coin} setCoin={setCoin}></SelectedPlayers>}
        </div>
    )
}

export default Players;