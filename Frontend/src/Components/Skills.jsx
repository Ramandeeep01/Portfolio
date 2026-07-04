import React from "react";

const Skills = () => {
    return (
        <section className="bg-[#F8F6F3] py-16 lg:py-24">

            <div className="text-center lg:-mt-[120px] px-4">
                <h1 className="text-4xl sm:text-5xl lg:text-[55px] font-bold uppercase tracking-tight text-black">
                    My Tech Stack
                </h1>

                <p className="text-gray-500 text-[15px] leading-7 mt-4 max-w-[650px] mx-auto">
                    Modern tools and frameworks used to build scalable full-stack web applications.
                </p>
            </div>

            <div className="mt-12 flex flex-col items-center gap-2 px-4">

                {/* Card 1 */}
                <div className="w-full max-w-[900px] bg-white border border-gray-200 rounded-[24px] px-6 lg:px-8 py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm">

                    <div className="flex items-start gap-5">

                        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-black">
                                Frontend Development
                            </h2>

                            <p className="text-sm text-gray-500 leading-6 mt-1">
                                Building responsive and interactive user interfaces using
                                modern frontend technologies with a strong focus on
                                performance and user experience.
                            </p>
                        </div>

                    </div>

                    <div className="bg-[#F5F5F5] rounded-xl px-5 py-2 self-start lg:self-center">
                        <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
                            Technologies
                        </p>

                        <h3 className="text-[15px] font-semibold text-black mt-1">
                            React.js • Tailwind CSS
                        </h3>
                    </div>

                </div>

                {/* Card 2 */}
                <div className="w-full max-w-[900px] bg-white border border-gray-200 rounded-[24px] px-6 lg:px-8 py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm">

                    <div className="flex items-start gap-5">

                        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-black">
                                Backend Development
                            </h2>

                            <p className="text-sm text-gray-500 leading-6 mt-1">
                                Creating secure REST APIs, authentication systems, and
                                scalable backend services with a focus on performance and
                                maintainability.
                            </p>
                        </div>

                    </div>

                    <div className="bg-[#F5F5F5] rounded-xl px-5 py-2 self-start lg:self-center">
                        <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
                            Technologies
                        </p>

                        <h3 className="text-[15px] font-semibold text-black mt-1">
                            Node.js • Express.js • JWT
                        </h3>
                    </div>

                </div>

                {/* Card 3 */}
                <div className="w-full max-w-[900px] bg-white border border-gray-200 rounded-[24px] px-6 lg:px-8 py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm">

                    <div className="flex items-start gap-5">

                        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-black">
                                Database & Development Tools
                            </h2>

                            <p className="text-sm text-gray-500 leading-6 mt-1">
                                Managing databases, version control, and development tools
                                to build reliable, maintainable, and production-ready
                                applications.
                            </p>
                        </div>

                    </div>

                    <div className="bg-[#F5F5F5] rounded-xl px-5 py-2 self-start lg:self-center">
                        <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
                            Technologies
                        </p>

                        <h3 className="text-[15px] font-semibold text-black mt-1">
                            MongoDB • Git • GitHub • Postman
                        </h3>
                    </div>

                </div>

                {/* Card 4 */}
                <div className="w-full max-w-[900px] bg-white border border-gray-200 rounded-[24px] px-6 lg:px-8 py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm">

                    <div className="flex items-start gap-5">

                        <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-black">
                                Continuous Learning
                            </h2>

                            <p className="text-sm text-gray-500 leading-6 mt-1">
                                Constantly exploring new technologies and best practices to
                                improve my development skills and build modern, scalable
                                software.
                            </p>
                        </div>

                    </div>

                    <div className="bg-[#F5F5F5] rounded-xl px-5 py-2 self-start lg:self-center">
                        <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
                            Learning
                        </p>

                        <h3 className="text-[15px] font-semibold text-black mt-1">
                            TypeScript • Next.js • Docker • PostgreSQL • AWS
                        </h3>

                    </div>

                </div>

            </div>

            <div className="mt-20 w-full bg-black py-6 px-4 overflow-hidden">

                <p className="text-white text-xs sm:text-sm uppercase tracking-[2px] sm:tracking-[3px] text-center leading-7">
                    ★ React.js ★ JavaScript ★ Vite ★ Tailwind CSS ★ React Router ★ Axios ★ React Query ★ Zustand ★ Node.js ★ Express.js ★ MongoDB ★ Mongoose ★ JWT Authentication ★ HTTP Only Cookies ★ REST APIs ★ Cloudinary ★ Multer ★ Razorpay ★ Ollama ★ Tesseract.js ★ PDF Parse ★ Mammoth ★ Git ★ GitHub ★
                </p>

            </div>

        </section>
    );
};

export default Skills;