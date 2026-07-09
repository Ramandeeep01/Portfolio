import React from "react";
import raman from "../Images/raman.jpeg";

const Main = () => {
    return (
        <div className="mt-[10px] pb-16 lg:pb-0 flex flex-col-reverse lg:flex-row items-center justify-between w-[95%] max-w-[1130px] mx-auto gap-10 lg:gap-0">

            {/* ================= DESKTOP ================= */}
            <div className="hidden lg:block w-full lg:w-1/2">

                {/* Role */}
                <div className="flex items-center gap-4">

                    <svg
                        className="w-[55px] flex-shrink-0"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>R</title>
                        <path d="M12 2.746c-6.627 0-12 3.599-12 8.037 0 3.897 4.144 7.144 9.64 7.88V16.26c-2.924-.915-4.925-2.755-4.925-4.877 0-3.035 4.084-5.494 9.12-5.494 5.038 0 8.757 1.683 8.757 5.494 0 1.976-.999 3.379-2.662 4.272.09.066.174.128.258.216.169.149.25.363.372.544 2.128-1.45 3.44-3.437 3.44-5.631 0-4.44-5.373-8.038-12-8.038zm-2.111 4.99v13.516l4.093-.002-.002-5.291h1.1c.225 0 .321.066.549.25.272.22.715.982.715.982l2.164 4.063 4.627-.002-2.864-4.826s-.086-.193-.265-.383a2.22 2.22 0 00-.582-.416c-.422-.214-1.149-.434-1.149-.434s3.578-.264 3.578-3.826c0-3.562-3.744-3.63-3.744-3.63zm4.127 2.93l2.478.002s1.149-.062 1.149 1.127c0 1.165-1.149 1.17-1.149 1.17h-2.478zm1.754 6.119c-.494.049-1.012.079-1.54.088v1.807a16.622 16.622 0 002.37-.473l-.471-.891s-.108-.183-.248-.394c-.039-.054-.08-.098-.111-.137z" />
                    </svg>

                    <div>
                        <p className="text-sm text-gray-500">MERN Stack</p>
                        <h2 className="text-xl font-semibold text-black">
                            Full Stack Developer
                        </h2>
                    </div>

                </div>

                <h1 className="text-6xl scale-y-105 mt-8 font-bold text-black leading-[0.9]">
                    RAMAN <br />
                    DEEP SINGH
                </h1>

                <div className="w-full mt-8">
                    <hr className="border-gray-200" />
                </div>

                <div className="flex gap-8 mt-8">

                    <div className="flex gap-3 flex-1">

                        <span className="text-xl mt-1">•</span>

                        <div>

                            <h3 className="text-[12px] font-semibold">
                                Frontend Development
                            </h3>

                            <p className="text-[11px] text-gray-500 leading-relaxed mt-1">
                                Building responsive and modern user interfaces with
                                React.js, Tailwind CSS, JavaScript, and Vite.
                            </p>

                        </div>

                    </div>

                    <div className="flex gap-3 flex-1">

                        <span className="text-xl mt-1">•</span>

                        <div>

                            <h3 className="text-[12px] font-semibold">
                                Backend Development
                            </h3>

                            <p className="text-[11px] text-gray-500 leading-relaxed mt-1">
                                Building secure REST APIs and backend applications
                                using Node.js, Express.js, and MongoDB.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= IMAGE ================= */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">

                <img
                    src={raman}
                    alt="Raman Deep Singh"
                    className="w-full max-w-[400px] lg:max-w-[500px] object-cover shadow-[0_0_20px_rgba(0,0,0,0.12)]"
                />

                {/* MOBILE CONTENT */}
                <div className="lg:hidden w-full text-center mt-6">

                    <p className="text-sm text-gray-500">
                        MERN Stack
                    </p>

                    <h2 className="text-xl font-semibold text-black mt-1">
                        Full Stack Developer
                    </h2>

                    <h1 className="text-4xl font-bold leading-[0.9] mt-6">
                        RAMANDEEP <br /> SINGH
                    </h1>

                    <hr className="border-gray-300 my-8" />

                    <div className="grid grid-cols-2 gap-6 text-left">

                        <div>

                            <h3 className="text-[12px] font-semibold text-black">
                                Frontend Development
                            </h3>

                            <p className="text-[11px] text-gray-500 leading-relaxed mt-2">
                                Building responsive and modern user interfaces with
                                React.js, Tailwind CSS, JavaScript, and Vite.
                            </p>

                        </div>

                        <div>

                            <h3 className="text-[12px] font-semibold text-black">
                                Backend Development
                            </h3>

                            <p className="text-[11px] text-gray-500 leading-relaxed mt-2">
                                Building secure REST APIs and backend applications
                                using Node.js, Express.js, and MongoDB.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Main;