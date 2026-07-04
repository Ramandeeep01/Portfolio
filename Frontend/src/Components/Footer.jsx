import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#F8F6F3] pt-16 lg:pt-24 pb-10">

            <div className="w-[95%] max-w-6xl mx-auto px-4 lg:px-8">

                {/* Top Divider */}
                <div className="border-t-2 border-black pt-10 lg:pt-16">

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

                        {/* Name */}
                        <div>

                            <h1 className="text-4xl lg:text-[52px] font-black uppercase tracking-tight text-black">
                                Raman Deep
                            </h1>

                            <p className="text-gray-500 uppercase tracking-[3px] text-sm mt-2">
                                Full Stack Developer
                            </p>

                        </div>

                        {/* Contact */}
                        <div className="space-y-4 w-full lg:w-auto">

                            <a
                                href="mailto:ramanxramanxraman@gmail.com"
                                className="flex items-center gap-3 text-gray-700 hover:text-black transition"
                            >
                                <FaEnvelope className="flex-shrink-0" size={18} />

                                <span className="break-all">
                                    ramanxramanxraman@gmail.com
                                </span>
                            </a>

                            <a
                                href="tel:8968948012"
                                className="flex items-center gap-3 text-gray-700 hover:text-black transition"
                            >
                                <FaPhoneAlt className="flex-shrink-0" size={17} />

                                <span>
                                    +91 89689 48012
                                </span>
                            </a>

                            <a
                                href="https://github.com/Ramandeeep01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-700 hover:text-black transition"
                            >
                                <FaGithub className="flex-shrink-0" size={19} />

                                <span>
                                    GitHub
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ramandeep-singh-a711b7413?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-700 hover:text-black transition"
                            >
                                <FaLinkedin className="flex-shrink-0" size={19} />

                                <span>
                                    LinkedIn
                                </span>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;