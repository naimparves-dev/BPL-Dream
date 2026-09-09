import { useState, type Dispatch, type SetStateAction } from "react";
import Logo from "../assets/logo.png";
import { HiCurrencyDollar } from "react-icons/hi";


export const Nav = ({Coin,setCoin}:{Coin:number,setCoin:Dispatch<SetStateAction<number>>}) => {
    

    return (
        <nav className="p-3">
            <div className="container mx-auto flex justify-between">
                <img src={Logo} alt="Logo" />
                <div className="flex gap-12">
                    <ul className="flex gap-7 items-center font-semibold text-2xl">
                        <li>Home</li>
                        <li>Fixtures</li>
                        <li>Team</li>
                        <li>Schadules</li>
                    </ul>
                    <div className="flex gap-1 items-center">
                        <HiCurrencyDollar className="font-bold text-2xl"/>
                        <button className="text-2xl font-bold">{Coin}</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}