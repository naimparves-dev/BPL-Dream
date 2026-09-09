export const NewsLetter = () => {

    return (
        <section className="relative z-20 translate-y-35">
            <div className="mx-auto w-[1300px] rounded-[20px] border border-white/60 bg-white/9 p-[18px] shadow-sm">

                <div className="flex h-[296px] flex-col items-center justify-center rounded-[15px] bg-gradient-to-tr from-[#a1e3f7] via-white to-[#f6d69f]">

                    <h2 className="text-[32px] font-bold text-[#111]">
                        Subscribe to our Newsletter
                    </h2>

                    <p className="mt-[8px] text-[20px] text-[#555]">
                        Get the latest updates and news right in your inbox!
                    </p>

                    <div className="mt-[14px] flex items-center gap-[10px]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-[44px] w-[365px] rounded-[7px] border border-[#ddd] px-[15px] text-[11px] outline-none"
                        />

                        <button className="h-[34px] rounded-[8px] bg-gradient-to-r from-[#e8a1c4] to-[#f4cf4c] px-[20px] text-[11px] font-semibold text-black">
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}