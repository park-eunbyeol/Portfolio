"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  User,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Palette,
  PenTool,
  TrendingUp
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Work", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent"
        >
          PORTFOLIO.
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-black/90 border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-white/80 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionTitle = ({ children, subtitle, align = 'left' }: { children: React.ReactNode, subtitle?: string, align?: 'left' | 'center' }) => (
  <div className={cn("mb-12", align === 'center' && "text-center")}>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-6xl xl:text-8xl font-black mb-6 tracking-tighter"
      style={{ fontFamily: 'var(--font-space-grotesk)' }}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/60 text-2xl xl:text-3xl font-medium leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("glass-card p-8 hover:bg-white/[0.06] transition-all duration-300", className)}>
    {children}
  </div>
);

// --- Constants ---

const projects = [
  {
    title: "MovieFlix",
    period: "2025.11.14 - 2025.12.05",
    overview: "TMDB REST API 기반의 영화 큐레이션 서비스 디자인 및 개발. 비주얼 임팩트와 가독성을 고려한 인터페이스 설계.",
    programs: "React, Naver API, CSS, Figma",
    contents: "메인페이지, 검색 시스템, 상세 정보 모달",
    contribution: "100% (1인 프로젝트)",
    description: "사용자의 검색 경험을 최우선으로 고려하여 미니멀한 UI를 설계했습니다. 비동기 데이터 통신을 통한 끊김 없는 사용자 경험과 시각적 계층 구조(Visual Hierarchy)를 강조한 레이아웃이 특징입니다.",
    tech: ["React", "Naver API", "Figma", "Photoshop"],
    github: "https://github.com/park-eunbyeol/movie-react",
    link: "https://unique-maamoul-7b66f6.netlify.app",
    image: <img src="/movie-react.png" alt="movie-react" className="w-full h-full object-cover object-left-top shadow-2xl" />,
    color: "from-violet-600/20 to-transparent"
  },
  {
    title: "카페드림 (Cafe Dream)",
    period: "2026.01.06 - 2026.01.28",
    overview: "카페 운영의 복잡함을 미니멀리즘으로 해석한 AI 관리 솔루션. 데이터 가독성을 극대화한 프리미엄 대시보드 설계.",
    programs: "Next.js, Naver API, Tailwind CSS, Figma",
    contents: "대시보드 UI, AI 분석 리포트, 반응형 웹",
    contribution: "100%, 1인 프로젝트",
    description: "AI가 제공하는 방대한 데이터를 정보의 우선순위에 따라 배치하여, 복잡한 비즈니스 지표를 한눈에 읽을 수 있는 직관적인 대시보드 경험을 선사합니다. 사장님의 시각적 피로도를 고려한 고감도 다크 모드 레이아웃을 구현했습니다.",
    tech: ["Next.js", "Naver API", "Figma", "Photoshop"],
    github: "https://github.com/park-eunbyeol/my-app",
    link: "https://my-app-omega-fawn-50.vercel.app/",
    image: <img src="/cafe-dream-final.png" alt="카페드림" className="w-full h-full object-cover object-top shadow-2xl" />,
    color: "from-amber-600/20 to-transparent"
  },
  {
    title: "COZY-DECO",
    period: "2024.01 - 2024.02",
    overview: "'가장 프라이빗한 휴식'을 테마로 한 감성 인테리어 커머스 디자인. 사용자의 공간에 포근함을 더하는 프리미엄 쇼핑 경험 제공.",
    programs: "PHP, MySQL, Figma, Photoshop, Illustrator",
    contents: "자동 슬라이드 히어로 섹션(직접 기획/구현), AI 상품 추천 시스템, 심리스 커스텀 주문서",
    contribution: "100%, 1인 프로젝트",
    description: "직접 기획하고 구현한 '자동 슬라이드 히어로 섹션'을 통해 브랜드의 핵심 비주얼을 역동적으로 전달합니다. 인테리어 브랜드 특유의 정온한 분위기 위해 고감도 화이트 스페이스와 Serif 타이포그래피를 조화롭게 배치했으며, 가입 없이도 장바구니 이용이 가능한 사용자 중심의 커머스 플로우를 설계했습니다.",
    tech: ["PHP", "MySQL", "Figma", "Photoshop"],
    github: "https://github.com/park-eunbyeol/homedeco-shop",
    link: "https://ghjrodf.dothome.co.kr/homedeco-shop/index.php",
    image: <img src="/cozy-deco.png" alt="COZY-DECO" className="w-full h-full object-cover object-top shadow-2xl" />,
    color: "from-stone-500/20 to-transparent"
  }
];

// --- Main Page ---

export default function Home() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailForm),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setEmailForm({ name: "", email: "", subject: "", message: "" });
        // Close modal after success after a delay
        setTimeout(() => {
          setIsEmailModalOpen(false);
          setSubmissionStatus('idle');
        }, 2000);
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-grid min-h-screen text-white font-sans selection:bg-violet-500/30">
      <Navbar />

      <main>
        {/* 1. Introduce (Hero) Section */}
        <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-6 py-2 rounded-full border border-violet-500/30 bg-violet-500/5 text-violet-400 text-base font-bold mb-8 flex items-center gap-2 justify-center mx-auto w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Web Designer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-8xl xl:text-9xl font-black mb-12 tracking-tighter"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              PORTFOLIO<span className="gradient-text">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#projects"
                className="px-10 py-5 rounded-full bg-white text-black font-black hover:bg-white/90 transition-all text-lg"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-10 py-5 rounded-full border border-white/20 bg-white/5 font-black hover:bg-white/10 transition-all text-lg"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </section>

        {/* 1.5. About Me Section (Consolidated) */}
        <section id="about" className="py-32 container mx-auto px-6">
          <SectionTitle align="center" subtitle="웹 디자이너 박은별을 소개합니다">About Me</SectionTitle>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 xl:p-12"
          >
            <div className="grid xl:grid-cols-2 gap-12">
              {/* Left Side - Profile */}
              <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-violet-600/20 to-pink-600/20 flex items-center justify-center mb-8 overflow-hidden border-2 border-white/10 shadow-2xl">
                  <img src="/profile-character.png" alt="Profile Character" className="w-full h-full object-cover scale-110" />
                </div>
                <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  park eunbyeol<span className="gradient-text">.</span>
                </h3>
                <p className="text-xl text-violet-400 font-bold mb-6">Web Designer</p>
                <p className="text-white/70 leading-relaxed mb-8 max-w-md">
                  사용자 중심의 가치를 시각적으로 구현하는 웹 디자이너 박은별입니다.
                  심플하면서도 힘 있는 디자인을 통해 브랜드의 이야기를 전달합니다.
                </p>

                <div className="flex gap-4">
                  <a href="mailto:ap9450150918@gmail.com" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-violet-400">
                    <Mail size={20} />
                  </a>
                  <a href="https://github.com/park-eunbyeol" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-violet-400">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Right Side - Details & Skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Education Section */}
                <div>
                  <h4 className="text-3xl xl:text-4xl font-black mb-6 gradient-text tracking-tighter" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Education
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-white font-black text-xl xl:text-2xl mb-1">대구보건고등학교</p>
                      <p className="text-white/50 text-base xl:text-lg">스마트경영학과 졸업</p>
                    </div>
                    <div>
                      <p className="text-white font-black text-xl xl:text-2xl mb-1">영진직업전문학교</p>
                      <p className="text-white/50 text-base xl:text-lg leading-relaxed">UX/UI 웹 & 앱 디자인 양성 과정</p>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div>
                  <h4 className="text-3xl xl:text-4xl font-black mb-6 gradient-text tracking-tighter" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Used Tools
                  </h4>
                  <div className="space-y-4">
                    {[
                      { skill: "Figma", level: 85 },
                      { skill: "Photoshop", level: 55 },
                      { skill: "Illustrator", level: 55 },
                      { skill: "HTML, CSS, JS", level: 90 },
                    ].map((item, i) => (
                      <div key={item.skill}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm font-bold uppercase tracking-wider">{item.skill}</span>
                          <span className="text-xs text-violet-400 font-bold">{item.level}%</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-gradient-to-r from-violet-500 to-pink-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. Professional Journey Section */}
        <section id="experience" className="py-24 bg-white/[0.01] border-b border-white/5">
          <div className="container mx-auto px-6">
            <SectionTitle align="center" subtitle="사회적 경험의 뿌리">Professional Journey</SectionTitle>

            <div className="max-w-4xl mx-auto mt-20">
              {/* Intro Text - Centered on Top */}
              <div className="text-center mb-24">
                <p className="text-white/60 text-xl xl:text-2xl leading-relaxed break-keep max-w-2xl mx-auto">
                  재무회계 분야에서의 실무 경험은 저에게 <br className="hidden md:block" />
                  디자인의 화려함 뒤에 숨겨진 **'논리적인 구조'**와 <br className="hidden md:block" />
                  **'정교한 디테일'**의 중요성을 가르쳐주었습니다.
                </p>
              </div>

              {/* Timeline Items - Zig-zag Layout on Desktop */}
              <div className="relative space-y-24 xl:space-y-0">
                {/* Central Vertical Line (Desktop only) */}
                <div className="hidden xl:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
                {/* 2. Plaza Pharmacy - Right Aligned on Desktop */}
                <div className="relative flex flex-col xl:flex-row xl:justify-start items-center group">
                  <div className="hidden xl:block absolute left-1/2 top-0 w-4 h-4 rounded-full bg-violet-500 -translate-x-1/2 shadow-[0_0_15px_rgba(139,92,246,0.5)] z-10 group-hover:scale-150 transition-transform" />

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="xl:w-1/2 xl:pr-20 xl:text-right w-full pl-12 xl:pl-0 relative pb-12 xl:pb-0"
                  >
                    {/* Mobile Timeline Line & Dot */}
                    <div className="xl:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10" />
                    <div className="xl:hidden absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-violet-500" />
                    <div className="flex flex-col xl:items-end gap-6 pb-2">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-violet-400">
                        2023.01 — 2023.11
                      </span>
                      <h4 className="text-4xl xl:text-5xl font-black tracking-tighter italic">프라자약국 (Plaza Pharmacy)</h4>
                      <p className="text-2xl font-bold text-white/90">전산 및 조제 보조</p>
                    </div>

                    <div className="mt-8 flex flex-col xl:items-end">
                      <ul className="space-y-4 max-w-xl">
                        {[
                          "고객 요청 사항을 정리하고 우선순위를 판단하여 업무를 처리",
                          "반복되는 업무 흐름을 정리하며 효율적인 업무 방식에 익숙",
                          "다양한 상황에서 정확성과 책임감을 요구받는 환경에서 근무"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start xl:flex-row-reverse gap-5 text-white/50 text-lg leading-relaxed text-left xl:text-right">
                            <div className="mt-3 w-1.5 h-1.5 rounded-full bg-violet-400/30 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Vertical Spacer for Desktop */}
                <div className="hidden xl:block h-32" />

                {/* 1. Hotel Laonjena - Left Aligned on Desktop */}
                <div className="relative flex flex-col xl:flex-row xl:justify-end items-center group">
                  <div className="hidden xl:block absolute left-1/2 top-0 w-4 h-4 rounded-full bg-white/10 -translate-x-1/2 z-10 group-hover:bg-violet-500 group-hover:scale-150 transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]" />

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="xl:w-1/2 xl:pl-20 w-full pl-12 relative opacity-40 group-hover:opacity-100 transition-all duration-500"
                  >
                    {/* Mobile Timeline Line & Dot */}
                    <div className="xl:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10" />
                    <div className="xl:hidden absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-white/20 group-hover:bg-violet-500" />
                    <div className="flex flex-col items-start gap-6 pb-2">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-white/30 group-hover:text-violet-400 transition-colors">
                        2021.09 — 2022.12
                      </span>
                      <h4 className="text-4xl xl:text-5xl font-black tracking-tighter italic">호텔라온제나 (Hotel Laonjena)</h4>
                      <p className="text-2xl font-bold text-white/90">경영기획팀 · 재무회계</p>
                    </div>

                    <div className="mt-8">
                      <ul className="space-y-4 max-w-xl">
                        {[
                          "매출 및 비용 데이터 정리·검증 업무 수행",
                          "정해진 기준에 따라 데이터 정확성을 유지하며 업무 처리",
                          "반복 업무 프로세스를 이해하고 효율적인 처리 방식에 익숙",
                          "타 부서와의 협업을 통해 정산 관련 이슈 대응"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-5 text-white/50 text-lg leading-relaxed">
                            <div className="mt-3 w-1.5 h-1.5 rounded-full bg-violet-400/30 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 Evolution of Craft (Growth Story) Section */}
        <section className="py-24 bg-white/[0.01] border-y border-white/5 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-black mb-6 tracking-tighter">Evolution of Craft</h3>
                  <p className="text-lg text-white/50 leading-relaxed break-keep">
                    "2025년 10월, 처음 웹 제작을 시작했을 때는 단순히 예쁜 화면을 그리는 것에 만족했습니다. <br className="hidden md:block" />
                    2026년 지금은 그 디자인이 비즈니스 문제를 어떻게 해결하고, <br className="hidden md:block" />
                    사용자에게 어떤 경험적 가치를 줄 수 있는지 설계하는 즐거움을 배웁니다."
                  </p>
                  <div className="mt-8 flex items-center gap-4 text-xs font-mono tracking-widest uppercase opacity-30">
                    <span>Oct 2025</span>
                    <div className="h-px w-24 bg-gradient-to-r from-white to-transparent" />
                    <span>Feb 2026</span>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center xl:items-end">
                {/* Before Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-64 space-y-4 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 group cursor-default"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden border border-white/5 bg-black/40">
                    <img src="/first-project.png" alt="First Project" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-violet-400 uppercase tracking-widest mb-1">Archive 2025</p>
                    <p className="text-sm font-bold opacity-80">BND Fanpage (Learning Stage)</p>
                  </div>
                </motion.div>

                {/* Growth Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="hidden xl:block pb-12"
                >
                  <TrendingUp className="text-violet-500/40 w-10 h-10" />
                </motion.div>

                {/* Current Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="w-full md:w-80 space-y-4 group cursor-default"
                >
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-violet-500/20 bg-black/40 shadow-2xl shadow-violet-500/10 transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src="/cafe-dream-final.png" alt="Current Project" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-violet-400 uppercase tracking-widest mb-1">Selected 2026</p>
                    <p className="text-sm font-bold">Premium Solution (Strategic Design)</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Selected Works Section */}
        <section id="projects" className="py-32 container mx-auto px-6">
          <SectionTitle align="center" subtitle="선택된 프로젝트들">Selected Works</SectionTitle>

          <div className="space-y-40 mt-20">
            {projects.map((project: any, index: number) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col xl:flex-row gap-12 xl:gap-24 items-start ${index % 2 === 1 ? 'xl:flex-row-reverse' : ''
                  }`}
              >
                {/* Text Area */}
                <div className="flex-1 space-y-10 group">
                  <div>
                    <span className="text-violet-400 font-bold tracking-widest uppercase text-sm mb-4 block">
                      {project.period}
                    </span>
                    <h3 className="text-5xl xl:text-6xl font-black mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {project.title}<span className="gradient-text">.</span>
                    </h3>
                  </div>

                  <div className="space-y-8">
                    <div className="flex flex-col gap-2">
                      <span className="text-violet-400 font-black uppercase text-xs tracking-widest">Overview</span>
                      <p className="text-white/60 text-lg leading-relaxed font-medium">
                        {project.overview}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/5">
                      <div className="flex flex-col gap-2">
                        <span className="text-violet-400 font-black uppercase text-xs tracking-widest">Used Programs</span>
                        <p className="text-white/90 font-bold">{project.programs}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-violet-400 font-black uppercase text-xs tracking-widest">Contents</span>
                        <p className="text-white/90 font-bold">{project.contents}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-violet-400 font-black uppercase text-xs tracking-widest">Contribution</span>
                        <p className="text-white/90 font-bold">{project.contribution}</p>
                      </div>
                    </div>

                    <div className="pt-8 space-y-6">
                      <p className="text-white/80 leading-loose">
                        {project.description}
                      </p>
                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3 rounded-full bg-white text-black font-black hover:bg-violet-400 hover:text-white transition-all text-sm"
                        >
                          Launch Site
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3 rounded-full border border-white/20 bg-white/5 font-black hover:bg-white/10 transition-all text-sm flex items-center gap-2"
                        >
                          <Github size={18} /> Source code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Area */}
                <div className="flex-1 w-full group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700`} />
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl aspect-[16/10] group-hover:border-violet-500/50 transition-colors duration-500 shadow-2xl flex flex-col">
                    {/* Browser Mockup Header */}
                    <div className="h-8 bg-white/5 border-b border-white/10 flex items-center gap-1.5 px-5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <div className="relative flex-1 overflow-hidden transition-transform duration-1000 group-hover:scale-105">
                      {project.image}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Design Capability (Creative Craft) Section */}
        <section id="skills" className="py-32 bg-white/[0.02]">
          <div className="container mx-auto px-6">
            <SectionTitle subtitle="사용자의 마음을 움직이는 시각적 인터랙션의 힘">Design Capability</SectionTitle>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-20">

              {/* Creative Tools */}
              <div className="xl:col-span-4 space-y-6">
                <h4 className="text-xs font-black text-violet-400 uppercase tracking-[0.4em] mb-10 opacity-70">Design Tools</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Figma", icon: <Layers size={16} /> },
                    { name: "Photoshop", icon: <Palette size={16} /> },
                    { name: "Illustrator", icon: <PenTool size={16} /> },
                    { name: "After Effects", icon: <Layers size={16} /> },
                  ].map((tool) => (
                    <div key={tool.name} className="px-5 py-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-3 hover:bg-white/10 hover:border-violet-500/20 transition-all group">
                      <span className="text-violet-400/60 group-hover:text-violet-400 group-hover:scale-110 transition-all">{tool.icon}</span>
                      <span className="font-bold text-base">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Design & UX */}
              <div className="xl:col-span-5 space-y-6">
                <h4 className="text-xs font-black text-violet-400 uppercase tracking-[0.4em] mb-10 opacity-70">Creative Strategy</h4>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { title: "UI/UX Visual System", desc: "사용자 경험을 최우선으로 고려한 시각적 위계 설계" },
                    { title: "Typography & Layout", desc: "고감도 화이트 스페이스와 타이포그래피 정렬의 미학" },
                    { title: "Brand Identity Design", desc: "브랜드의 본질을 관통하는 일관된 시각 언어 수립" }
                  ].map((skill) => (
                    <div key={skill.title} className="p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 transition-all">
                      <p className="font-bold text-lg mb-1">{skill.title}</p>
                      <p className="text-sm text-white/40">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interaction & Publishing */}
              <div className="xl:col-span-3 space-y-6">
                <h4 className="text-xs font-black text-violet-400 uppercase tracking-[0.4em] mb-10 opacity-70">Visual Interaction</h4>
                <div className="space-y-8 pl-4 border-l border-white/5">
                  {[
                    { name: "Web Publishing", detail: "웹 표준을 넘어 인터랙션의 기초가 되는 정교한 구현" },
                    { name: "Motion Interaction", detail: "사용자 몰입을 극대화하는 감각적인 애니메이션 시퀀스" },
                    { name: "Visual Prototype", detail: "기획과 디자인이 살아 움직이는 고해상도 시뮬레이션" }
                  ].map((item) => (
                    <div key={item.name} className="relative group cursor-default">
                      <div className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <p className="font-black text-xl mb-1 group-hover:text-violet-400 transition-colors uppercase italic tracking-tighter">{item.name}</p>
                      <p className="text-xs text-white/30 tracking-tight leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Philosophy Line (The Decisive Blow) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 text-center border-t border-white/5 pt-16 max-w-3xl mx-auto"
            >
              <p className="text-white/80 text-xl md:text-2xl font-bold mb-6 leading-tight break-keep tracking-tight">
                "저는 디자인과 개발의 경계를 허무는 인터랙션을 통해,<br className="hidden md:block" /> 정적인 화면에 생명력을 불어넣는 즐거움을 느낍니다."
              </p>
              <p className="text-violet-400/30 font-mono text-xs tracking-[0.5em] uppercase">
                Design that moves, interacts, and creates value.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 6. Misc (Contact) Section */}
        <section id="contact" className="py-40 container mx-auto px-6">
          <Card className="bg-gradient-to-br from-violet-600/10 to-pink-600/10 border-violet-500/20 py-24 text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-6xl xl:text-8xl font-black mb-8 leading-tight tracking-tighter"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Let&apos;s build <br />
              <span className="gradient-text">something great.</span>
            </motion.h2>
            <p className="text-white/50 text-xl max-w-xl mx-auto mb-12">
              새로운 기회와 협업은 언제나 환영입니다. <br />
              함께 더 나은 디지털 세상을 만들어가요.
            </p>
            <div className="flex justify-center flex-wrap gap-8">
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="flex items-center gap-3 text-2xl font-bold hover:text-violet-400 transition-colors cursor-pointer"
              >
                <Mail /> ap9450150918@gmail.com
              </button>
              <div className="flex gap-6 items-center border-l border-white/10 pl-8">
                <a href="https://github.com/park-eunbyeol" target="_blank" rel="noopener noreferrer">
                  <Github size={32} className="hover:text-white text-white/40 transition-colors" />
                </a>
              </div>
            </div>
          </Card>
        </section>

        {/* Email Modal */}
        <AnimatePresence>
          {isEmailModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsEmailModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl glass-card p-8 xl:p-12 border-violet-500/30"
              >
                <button
                  onClick={() => setIsEmailModalOpen(false)}
                  className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                >
                  <X size={28} />
                </button>

                <h3 className="text-3xl xl:text-4xl font-black mb-3 gradient-text">
                  Get In Touch
                </h3>
                <p className="text-white/60 mb-8">
                  프로젝트 문의나 협업 제안을 보내주세요!
                </p>

                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-white/80 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        required
                        value={emailForm.name}
                        onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:outline-none transition-colors"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-white/80 mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        required
                        value={emailForm.email}
                        onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white/80 mb-2">
                      제목 *
                    </label>
                    <input
                      type="text"
                      required
                      value={emailForm.subject}
                      onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:outline-none transition-colors"
                      placeholder="프로젝트 협업 제안"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white/80 mb-2">
                      메시지 *
                    </label>
                    <textarea
                      required
                      value={emailForm.message}
                      onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:outline-none transition-colors resize-none"
                      placeholder="메시지를 입력해주세요..."
                    />
                  </div>

                  <div className="flex flex-col gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || submissionStatus === 'success'}
                      className={cn(
                        "flex-1 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2",
                        submissionStatus === 'success'
                          ? "bg-green-500 text-white"
                          : "bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:shadow-lg hover:shadow-violet-600/50"
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          보내는 중...
                        </>
                      ) : submissionStatus === 'success' ? (
                        "전송 완료!"
                      ) : (
                        "이메일 보내기"
                      )}
                    </button>
                    {submissionStatus === 'error' && (
                      <p className="text-pink-500 text-sm text-center">
                        전송에 실패했습니다. 다시 시도해 주세요.
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => setIsEmailModalOpen(false)}
                      className="px-8 py-4 rounded-full border border-white/10 bg-white/5 font-bold hover:bg-white/10 transition-all text-white/60"
                    >
                      취소
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 border-t border-white/10 text-center text-white/30 text-sm">
        <p>© 2026 Developer Portfolio. Built with Next.js & Framer Motion.</p>
      </footer>
    </div>
  );
}
