import React from "react";
import vendora from "../Images/vendora.png";
import vault from "../Images/vault.png";

const Projects = () => {
    return (
        <section className="bg-[#F8F6F3] py-24">

            <div className="max-w-6xl w-[95%] mx-auto px-4 lg:px-8">

                {/* Main Content */}
                <div className="flex mt-[-100px] items-center justify-between gap-24">

                    {/* Right Heading */}
                    <div className="flex ml-[600px] flex-col">

                        <span className="uppercase tracking-[6px] text-[12px] text-gray-500 mb-10">
                            • Projects
                        </span>

                        <h1 className="text-[82px] leading-[0.9] font-black uppercase text-black">
                            Featured
                            <br />
                            Projects
                        </h1>

                        <br />
                        <br />

                        <hr className="w-[1130px] h-[3px] ml-[-620px] bg-black border-0 mx-auto mt-2" />

                    </div>

                </div>

                {/* Cards */}
                <div className="flex flex-col lg:flex-row justify-between gap-8 mt-[-30px]">

                    {/* Left Info */}
                    <div className="w-full lg:w-[290px] h-auto lg:h-[270px] pt-4 px-4 bg-black mt-[100px]">

                        <h2 className="text-[24px] font-bold text-white mb-4">
                            Projects
                        </h2>

                        <p className="text-[14px] text-white">
                            A collection of full-stack web applications built with modern
                            technologies, focusing on clean architecture, responsive
                            design, performance, and real-world user experiences.
                            <br />
                            <br />
                            <span className="font-semibold">
                                Click on any project card to view its GitHub repository.
                            </span>
                        </p>

                    </div>

                    {/* Vendora */}
                    <a
                        href="https://github.com/Ramandeeep01/vendora.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full lg:w-auto"
                    >

                        <div className="w-full lg:w-[350px] h-[390px] bg-white border border-gray-400 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer mt-[100px]">

                            <img
                                src={vendora}
                                alt="Vendora Project"
                                className="w-full h-[190px] object-cover"
                            />

                            <div className="p-5">

                                <h1 className="text-[35px] font-bold text-black">
                                    🛒Vendora
                                </h1>

                                <p className="text-[14px] leading-6 text-gray-600 mt-3 line-clamp-4">
                                    AI-powered document intelligence platform where users can upload
                                    PDFs, DOCX, TXT, and images, then chat with their documents using
                                    a locally hosted LLM (Ollama).
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

                        <div className="w-full lg:w-[350px] h-[390px] bg-white border border-gray-400 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer mt-[100px]">

                            <img
                                src={vault}
                                alt="VaultIQ Project"
                                className="w-full h-[190px] object-cover"
                            />

                            <div className="p-5">

                                <h1 className="text-[35px] font-bold text-black">
                                    🧠VaultIQ
                                </h1>

                                <p className="text-[14px] leading-6 text-gray-600 mt-3 line-clamp-4">
                                    Production-style multi-vendor marketplace built with the MERN Stack,
                                    featuring secure authentication, seller dashboards, Cloudinary image
                                    uploads, and Razorpay payment integration.
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