import React from "react";
import vendora from "../Images/vendora.png";
import vault from "../Images/vault.png";

const Projects = () => {
    return (
        <section className="bg-[#F8F6F3] py-16 lg:py-24">

            <div className="max-w-6xl w-[95%] mx-auto px-4 lg:px-8">

                {/* Heading */}
                <div className="flex justify-end lg:-mt-[100px]">

                    <div className="flex flex-col lg:ml-[600px] w-full">

                        <span className="uppercase tracking-[6px] text-[12px] text-gray-500 mb-6 lg:mb-10">
                            • Projects
                        </span>

                        <h1 className="text-5xl sm:text-6xl lg:text-[82px] leading-[0.9] font-black uppercase text-black">
                            Featured
                            <br />
                            Projects
                        </h1>

                        <hr className="w-full lg:w-[1130px] lg:ml-[-620px] h-[3px] bg-black border-0 mt-8" />

                    </div>

                </div>

                {/* Cards */}
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:mt-[-30px] mt-10">

                    {/* Left Info */}
                    <div className="w-full h-full lg:w-[290px] bg-black p-5 lg:mt-[100px]">

                        <h2 className="text-2xl font-bold text-white mb-4">
                            Projects
                        </h2>

                        <p className="text-[14px] leading-6 text-white">
                            A collection of full-stack web applications built with modern
                            technologies, focusing on clean architecture, responsive
                            design, performance, and real-world user experiences.

                            <br />
                            <br />

                        </p>

                    </div>

                    {/* Vendora */}
                    <a
                        href="https://github.com/Ramandeeep01/vendora.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full lg:w-auto"
                    >

                        <div className="w-full lg:w-[350px] bg-white border border-gray-400 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer lg:mt-[100px]">

                            <img
                                src={vendora}
                                alt="Vendora Project"
                                className="w-full h-[190px] object-cover"
                            />

                            <div className="p-5">

                                <h1 className="text-3xl lg:text-[35px] font-bold text-black">
                                    🛒Vendora
                                </h1>

                                <p className="text-[14px] leading-6 text-gray-600 mt-3">
                                    AI-powered document intelligence platform where users can upload PDFs, DOCX, TXT, and images, then chat with their documents using a locally hosted LLM (Ollama).
                                </p>

                            </div>

                        </div>

                    </a>

                    {/* VaultIQ */}
                    <a
                        href="https://github.com/Ramandeeep01/VaultIQ.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full lg:w-auto"
                    >

                        <div className="w-full lg:w-[350px] bg-white border border-gray-400 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer lg:mt-[100px]">

                            <img
                                src={vault}
                                alt="VaultIQ Project"
                                className="w-full h-[190px] object-cover"
                            />

                            <div className="p-5">

                                <h1 className="text-3xl lg:text-[35px] font-bold text-black">
                                    🧠VaultIQ
                                </h1>

                                <p className="text-[14px] leading-6 text-gray-600 mt-3">
                                    Multi-vendor marketplace built with the MERN Stack, featuring secure authentication, seller dashboards, Cloudinary image uploads, and Razorpay payment integration.
                                </p>

                            </div>

                        </div>

                    </a>

                </div>

            </div>

        </section>
    );
};

export default Projects;