import { type Dispatch, type SetStateAction } from "react";
import Logo from "../assets/logo.png";
import { HiCurrencyDollar } from "react-icons/hi";


export const Nav = ({ Coin }: { Coin: number, setCoin: Dispatch<SetStateAction<number>> }) => {


    return (
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-[90px] w-[1300px] items-center justify-between">

                {/* Logo */}
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-[75px] w-auto object-contain"
                />

                {/* Right Side */}
                <div className="flex items-center gap-12">

                    {/* Menu */}
                    <ul className="flex items-center gap-9 text-[19px] font-semibold text-[#111827]">
                        <li className="cursor-pointer transition hover:text-[#16a34a]">
                            Home
                        </li>

                        <li className="cursor-pointer transition hover:text-[#16a34a]">
                            Fixtures
                        </li>

                        <li className="cursor-pointer transition hover:text-[#16a34a]">
                            Team
                        </li>

                        <li className="cursor-pointer transition hover:text-[#16a34a]">
                            Schadules
                        </li>
                    </ul>

                    {/* Coin */}
                    <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
                        <HiCurrencyDollar className="text-[22px] font-bold text-[#111]" />

                        <button className="text-[18px] font-bold text-[#111]">
                            {Coin}
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )   
}