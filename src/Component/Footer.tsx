import Logo from "../assets/logo-footer.png";

export const Footer = () => {

    return (
        <footer className="w-full bg-[#050817] text-white">

            {/* Footer Content */}
            <div className="mx-auto w-[1300px] px-[80px] pt-[200px]">

                {/* Logo */}
                <div className="flex justify-center">
                    <img
                        src={Logo}
                        alt="Cricket"
                        className="h-[85px] w-auto"
                    />
                </div>

                {/* Footer Columns */}
                <div className="mt-[35px] grid grid-cols-3 gap-[100px]">

                    {/* About Us */}
                    <div>
                        <h3 className="text-[20px] font-semibold">
                            About Us
                        </h3>

                        <p className="mt-[10px] w-[200px] text-[17px] leading-[18px] text-[#9b9dab]">
                            We are a passionate team
                            dedicated to providing the best
                            services to our customers.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[23px] font-semibold">
                            Quick Links
                        </h3>

                        <ul className="mt-[10px] space-y-[7px] text-[20px] text-[#9b9dab]">
                            <li>• Home</li>
                            <li>• Services</li>
                            <li>• About</li>
                            <li>• Contact</li>
                        </ul>
                    </div>


                    {/* Subscribe */}
                    <div>
                        <h3 className="text-[13px] font-semibold">
                            Subscribe
                        </h3>

                        <p className="mt-[10px] w-[210px] text-[11px] leading-[17px] text-[#9b9dab]">
                            Subscribe to our newsletter for the
                            latest updates.
                        </p>

                        <div className="mt-[13px] flex h-[30px] w-[225px] overflow-hidden rounded-[7px] bg-white">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-[140px] px-[12px] text-[9px] text-gray-600 outline-none"
                            />

                            <button className="flex-1 bg-gradient-to-r from-[#f2d35b] to-[#e89bc3] text-[9px] font-semibold text-black">
                                Subscribe
                            </button>

                        </div>
                    </div>

                </div>
            </div>


            {/* Copyright */}
            <div className="mt-[45px] border-t border-[#171b2c]">
                <p className="py-[17px] text-center text-[10px] text-[#858796]">
                    @2024 Your Company All Rights Reserved.
                </p>
            </div>

        </footer>
    )
}