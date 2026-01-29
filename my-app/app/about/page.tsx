"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Github, Linkedin, Code, Heart, Target, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-grid min-h-screen text-white font-sans selection:bg-violet-500/30">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                    <div className="text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                        자기소개서
                    </div>
                </div>
            </header>

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            안녕하세요,<br />
                            <span className="gradient-text">박은별</span>입니다.
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            포기하지 않는 끈기로 문제를 해결하는 프론트엔드 개발자
                        </p>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-16 flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-pink-600/20 rounded-[40px] blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="relative w-64 h-80 rounded-[30px] overflow-hidden border border-white/10 glass-card">
                                <img
                                    src="/profile-character.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Introduction Sections */}
                    <div className="space-y-12">
                        {/* Section 1: Who I Am */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass-card p-8 md:p-12 border-violet-500/20"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg bg-violet-600/10">
                                    <Code className="text-violet-400" size={24} />
                                </div>
                                <h2 className="text-3xl font-black">저는 이런 개발자입니다</h2>
                            </div>
                            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
                                <p>
                                    어려운 기술적 과제도 <span className="text-white font-bold">집요하게 파고들어 완성하는</span> 프론트엔드 개발자입니다.
                                    단순히 코드를 작성하는 것을 넘어, 사용자가 느끼는 경험의 모든 순간을 고민합니다.
                                </p>
                                <p>
                                    포기하지 않는 끈기로 비즈니스의 복잡한 문제를 해결하고,
                                    <span className="text-violet-400 font-bold"> 최고의 사용자 경험</span>을 구현하는 것이 저의 강점입니다.
                                </p>
                            </div>
                        </motion.section>

                        {/* Section 2: My Motivation */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="glass-card p-8 md:p-12 border-pink-500/20"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg bg-pink-600/10">
                                    <Heart className="text-pink-400" size={24} />
                                </div>
                                <h2 className="text-3xl font-black">개발을 시작한 이유</h2>
                            </div>
                            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
                                <p>
                                    처음 웹 개발을 접했을 때, 코드 한 줄로 화면이 변하고 사용자와 상호작용하는 모습에 매료되었습니다.
                                    단순한 텍스트와 명령어가 <span className="text-white font-bold">살아있는 경험</span>으로 바뀌는 순간이 너무나 흥미로웠습니다.
                                </p>
                                <p>
                                    특히 사용자가 제가 만든 서비스를 통해 문제를 해결하고 만족하는 모습을 볼 때,
                                    개발자로서의 보람을 느낍니다. 이것이 제가 프론트엔드 개발자의 길을 선택한 이유입니다.
                                </p>
                            </div>
                        </motion.section>

                        {/* Section 3: My Goal */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="glass-card p-8 md:p-12 border-violet-500/20"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg bg-violet-600/10">
                                    <Target className="text-violet-400" size={24} />
                                </div>
                                <h2 className="text-3xl font-black">앞으로의 목표</h2>
                            </div>
                            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
                                <p>
                                    단순히 기능을 구현하는 개발자가 아닌, <span className="text-white font-bold">비즈니스 가치를 창출하는 개발자</span>가 되고자 합니다.
                                    기술적 완성도와 사용자 경험, 그리고 비즈니스 목표를 모두 만족시키는 솔루션을 만드는 것이 목표입니다.
                                </p>
                                <p>
                                    또한 새로운 기술을 빠르게 학습하고 적용하며, 팀과 함께 성장하는 개발자가 되겠습니다.
                                    끊임없이 배우고 발전하여 <span className="text-violet-400 font-bold">더 나은 디지털 경험</span>을 만들어가겠습니다.
                                </p>
                            </div>
                        </motion.section>

                        {/* Section 4: My Strengths */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="glass-card p-8 md:p-12 border-pink-500/20"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg bg-pink-600/10">
                                    <Lightbulb className="text-pink-400" size={24} />
                                </div>
                                <h2 className="text-3xl font-black">저의 강점</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "문제 해결 능력",
                                        desc: "복잡한 기술적 문제도 끈기있게 분석하고 해결합니다."
                                    },
                                    {
                                        title: "사용자 중심 사고",
                                        desc: "항상 사용자 관점에서 UI/UX를 고민하고 개선합니다."
                                    },
                                    {
                                        title: "빠른 학습력",
                                        desc: "새로운 기술과 도구를 빠르게 습득하고 프로젝트에 적용합니다."
                                    },
                                    {
                                        title: "협업 능력",
                                        desc: "팀원들과 원활하게 소통하며 함께 성장합니다."
                                    }
                                ].map((strength, i) => (
                                    <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
                                        <h3 className="text-xl font-bold mb-2 text-white">{strength.title}</h3>
                                        <p className="text-white/70">{strength.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t border-white/10 text-center text-white/30 text-sm">
                <p>© 2026 박은별 Portfolio. Built with Next.js & Framer Motion.</p>
            </footer>
        </div>
    );
}
