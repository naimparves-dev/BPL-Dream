import Cricket from "../assets/banner-main.png";

export const Hero = () => {
    return (
        <section className="container mx-auto mt-7">
            <div className="relative overflow-hidden rounded-2xl min-h-[395px] flex flex-col items-center justify-center text-center bg-[#111111] px-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_95%,#667eea_0%,transparent_32%),radial-gradient(circle_at_95%_5%,#d69a9a_0%,transparent_30%)]"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <img src={Cricket} alt="Cricket" className="w-[180px] h-[160px] object-contain" />

                    <h1 className="text-white text-[32px] font-bold -mt-2">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h1>

                    <p className="text-gray-300 text-[18px] mt-3">
                        Beyond Boundaries Beyond Limits
                    </p>

                    <button className="mt-5 px-5 py-3 rounded-xl bg-lime-400 border-2 border-lime-300 shadow-[0_0_0_3px_#222] text-black font-bold text-sm hover:bg-lime-300 transition">
                        Claim Free Credit
                    </button>
                </div>
            </div>
        </section>
    );
};