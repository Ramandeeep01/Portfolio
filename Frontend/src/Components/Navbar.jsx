import React from "react";

const Navbar = () => {
    return (
        <div className="w-full">

            <hr className="w-[95%] max-w-[1130px] h-[3px] bg-black border-0 mx-auto" />

            <div className="flex flex-col lg:flex-row items-center justify-between w-[95%] max-w-[1130px] mx-auto mt-4">

                {/* Logo */}
                <div className="self-center lg:self-auto lg:ml-[5px]">
                    <h1 className="text-2xl font-bold lg:ml-6 bg-[#FFFFFF] inline-block px-4 py-2 shadow-[0_0_20px_rgba(0,0,0,0.12)] rounded-[10px]">
                        Raman
                    </h1>
                </div>

                {/* Navigation */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-6 lg:mt-0 lg:mr-[25px] text-lg font-medium">

                    <div className="relative group cursor-pointer">
                        <h1
                            className="hover:text-black transition-colors duration-300"
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Home
                        </h1>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    <div className="relative group cursor-pointer">
                        <h1
                            className="hover:text-black transition-colors duration-300"
                            onClick={() => {
                                window.scrollTo({
                                    top: 700,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            About
                        </h1>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    <div className="relative group cursor-pointer">
                        <h1
                            className="hover:text-black transition-colors duration-300"
                            onClick={() => {
                                window.scrollTo({
                                    top: 1260,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Skills
                        </h1>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </div>

                    <div className="relative group cursor-pointer">
                        <h1
                            className="hover:text-black transition-colors duration-300"
                            onClick={() => {
                                window.scrollTo({
                                    top: 2260,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Projects
                        </h1>
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Navbar;