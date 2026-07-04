import React from "react";

const About = () => {
    return (
        <section className="bg-[#F8F6F3] py-16 lg:py-24 px-4 sm:px-8 lg:px-20">

            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mt-8">

                {/* Left Side */}
                <div>

                    <p className="text-[12px] uppercase tracking-[4px] text-gray-500 mb-8">
                        • ABOUT ME
                    </p>

                    <h1 className="text-5xl sm:text-6xl lg:text-[90px] leading-[0.9] font-bold uppercase text-black">
                        ABOUT <br />
                        ME
                    </h1>

                </div>

                {/* Right Side */}
                <div className="w-full lg:w-auto flex justify-center">

                    <div className="w-full max-w-[420px] bg-white border border-gray-200 lg:-mt-[60px] rounded-[24px] p-6 lg:p-8 shadow-sm">

                        <p className="text-gray-600 leading-7 lg:leading-8 text-[15px]">
                            I'm a passionate Full Stack MERN Developer currently pursuing a Bachelor
                            of Computer Applications. I enjoy building scalable web applications with
                            clean architecture, modern technologies, and responsive user interfaces.
                            My goal is to create software that solves real-world problems while
                            continuously learning and growing as a developer.
                        </p>

                        <button className="mt-8 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all duration-300">
                            Connect with Developer →
                        </button>

                    </div>

                </div>

            </div>

            <hr className="w-[95%] max-w-[1000px] h-[3px] bg-black border-0 mx-auto mt-16" />

        </section>
    );
};

export default About;