import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter, Instagram, LucideGithub, Facebook } from 'lucide-react';
import avatar from '../../assets/avatar.jpg';
import BottomNav from "../../components/bottomNav";

const About = () => {
    const sectionVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <>
            <div className="bg-gray-900 text-white min-h-screen p-8 flex flex-col items-center overflow-auto">
                {/* Profile Section */}
                <motion.section
                    className="bg-gray-800 rounded-2xl p-6 w-full max-w-xl shadow-xl section"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center space-x-4">
                        <img
                            src={avatar}
                            alt="Profile"
                            className="rounded-lg w-24  grayscale-25 "
                        />
                        <div>
                            <h2 className="text-2xl font-semibold">Hey again 👋</h2>
                            <p className="text-gray-400">
                                I'm AllSupportCode, you can call me Ken. I am working on digital experiences which are fun and positively impact on people/organizations.
                            </p>
                        </div>
                    </div>

                    {/* Skill Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {['Intermediate Coder', 'Web/Mobile Developer', 'API', 'React/React Native'].map((tag, index) => (
                            <span key={index} className="bg-green-600 text-white px-3 py-1 text-sm rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.section>

                {/* Software Section */}
                <motion.section
                    className="bg-gray-800 rounded-2xl p-6 w-full max-w-xl mt-8 shadow-xl section"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-lg font-semibold mb-4">Programming Languages</h3>
                    <div className="space-y-4">
                        {[
                            { name: 'React', percentage: 60 },
                            { name: 'React Native', percentage: 90 },
                            { name: 'Python', percentage: 20 },
                        ].map((language, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-1">
                                    <span>{language.name}</span>
                                    <span>{language.percentage}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5">
                                    <div
                                        className="bg-green-600 h-2.5 rounded-full"
                                        style={{ width: `${language.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Contact Section */}
                <motion.section
                    className="bg-gray-800 rounded-2xl p-6 w-full max-w-xl mt-8 shadow-xl mb-20 section"
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-lg font-semibold mb-4">Come and say hi!</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 cursor-pointer">
                            <Mail className="w-7 h-7 text-gray-400" />
                            <span>astreamer377@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                            <LucideGithub className="w-7 h-7 text-gray-400" />
                            <a href='https://github.com/AllSupportCode'>AllSupportCode</a>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                            <Facebook className="w-7 h-7 text-gray-400" />
                            <a href='https://www.facebook.com/profile.php?id=61558885425665'>Chiếc áo khoác</a>
                        </div>
                    </div>
                </motion.section>
            </div>
        </>
    );
};

export default About;