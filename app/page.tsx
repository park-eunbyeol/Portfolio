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
  X
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
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
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
        <div className="hidden md:flex gap-8">
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
        <div className="md:hidden">
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
            className="md:hidden bg-black/90 border-t border-white/10 overflow-hidden"
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

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white/80 text-xl font-medium"
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

const PROJECTS = [
  {
    title: "movie-react",
    period: "2025.11.12 - 2025.12.05",
    motivation: "한정적인 영화 검색 기능과 데이터 부재 문제를 해결하기 위한 광범위한 DB 구축",
    goal: "비동기 데이터 바인딩과 컴포넌트화를 통한 안정적인 영화 추천 서비스 구축",
    role: "핵심 기능 개발 (REST API 비동기 연동, 검색 및 필터링 시스템, UI 컴포넌트 설계)",
    description: "TMDB REST API를 활용한 비동기 데이터 통신을 구현하고, 원자 단위의 재사용 가능한 컴포넌트 구조로 UI를 설계하여 유지보수성을 높였습니다. 전체 빌드 및 Netlify 배포 프로세스를 직접 수행하며 완성도 높은 웹 서비스를 경험했습니다.",
    tech: ["React", "JavaScript", "CSS", "TMDB API", "Git", "Figma", "Netlify"],
    github: "https://github.com/park-eunbyeol/movie-react",
    link: "https://unique-maamoul-7b66f6.netlify.app",
    image: <img src="/movie-react.png" alt="movie-react" className="w-full h-full object-top shadow-2xl border border-white/5" />
  },
  {
    title: "카페드림",
    period: "2026.01.06 - 2026.01.28",
    motivation: "개별 카페 홍보 서비스는 많으나, 카페 운영진(사장님)을 위한 전문적인 마케팅 랜딩 페이지의 부재 해결",
    goal: "사장님들의 비즈니스 성장을 돕는 맞춤형 마케팅 솔루션 제안 및 직관적인 웹 인터페이스 구축",
    role: "프로젝트 기획 및 마케팅 특화 웹 UI/UX 설계, 분석 대시보드 개발",
    description: "기존의 홍보 위주 페이지에서 벗어나, 카페 사장님의 관점에서 실질적으로 필요한 마케팅 도구와 비즈니스 분석 기능을 담은 플랫폼을 기획했습니다. 사장님이 비즈니스 현황을 한눈에 파악하고 전략을 세울 수 있도록 사용자 중심의 데이터 시각화와 인터렉티브한 UI를 구현했습니다.",
    tech: ["React", "Next.js", "CSS", "TypeScript", "Supabase", "Figma", "GitHub", "Vercel"],
    github: "https://github.com",
    link: "https://demo.com",
    image: <img src="/cafe-dream.png" alt="카페드림" className="w-full h-full object-top shadow-2xl border border-white/5" />
  },
  {
    title: "HOMEDECO SHOP",
    period: "2023.09 - 2023.10",
    motivation: "기존 인테리어 쇼핑몰의 복잡한 결제 단계를 직관적으로 개선하여 구매 경험 고도화",
    goal: "사용자 이탈률 최소화를 위한 심리스(Seamless)한 커머스 경험 설계",
    role: "UI/UX 최적화 및 복잡한 장바구니 로직 상태 관리 설계",
    description: "사용자 여정 중 발생하는 작은 마찰 지점까지 끝까지 추적하고 개선하여 구매 완료 플로우를 최적화했습니다.",
    tech: ["Next.js", "Tailwind", "Prisma"],
    github: "https://github.com",
    link: "https://demo.com",
    image: <Layers className="text-white/20" size={48} />
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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:ap9450150918@gmail.com?subject=${encodeURIComponent(emailForm.subject)}&body=${encodeURIComponent(`From: ${emailForm.name} (${emailForm.email})\n\n${emailForm.message}`)}`;
    window.location.href = mailtoLink;
    setIsEmailModalOpen(false);
    setEmailForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-grid min-h-screen text-white font-sans selection:bg-violet-500/30">
      <Navbar />

      <main>
        {/* 1. Introduce (Hero) Section */}
        <section id="about" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Content */}
              <div className="lg:col-span-7 text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-violet-400 text-sm font-medium mb-8"
                >
                  Available for New Projects
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] text-white break-keep"
                >
                  가치있는 코드에 <br />
                  <span className="gradient-text">탁월한 경험을 담다.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="max-w-2xl text-xl text-white/80 mb-8 leading-relaxed break-keep font-medium"
                >
                  어려운 기술적 과제도 <span className="text-white font-bold underline underline-offset-4 decoration-violet-500">집요하게 파고들어 완성하는</span> 프론트엔드 개발자입니다. 포기하지 않는 끈기로 비즈니스의 복잡한 문제를 해결하고, 최고의 사용자 경험을 구현합니다.
                </motion.p>

                {/* Quick Info Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="grid grid-cols-2 gap-6 mb-12 border-l-2 border-violet-500/30 pl-6"
                >
                  {[
                    { label: "Name", value: "박은별", icon: <User size={18} /> },
                    { label: "Role", value: "Frontend Architect", icon: <Code size={18} /> },
                    { label: "Location", value: "Daegu, South Korea", icon: <MapPin size={18} /> },
                    { label: "Contact", value: "ap9450150918@gmail.com", icon: <Mail size={18} /> },
                  ].map((info, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-xs uppercase tracking-widest text-violet-400 font-black flex items-center gap-2">
                        {info.icon} {info.label}
                      </span>
                      <p className="text-lg font-bold text-white leading-none">{info.value}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all">
                    View Projects
                  </a>
                  <a href="/about" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 font-bold hover:bg-white/10 transition-all">
                    자기소개
                  </a>
                  <a href="#contact" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 font-bold hover:bg-white/10 transition-all">
                    Contact Me
                  </a>
                </motion.div>
              </div>

              {/* Profile Image Column */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative group"
                >
                  {/* Decorative Frames */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-pink-600/20 rounded-[40px] blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -inset-0.5 bg-gradient-to-tr from-violet-600 to-pink-600 rounded-[32px] opacity-20 group-hover:opacity-40 transition-opacity" />

                  {/* Image Container */}
                  <div className="relative w-72 h-96 md:w-80 md:h-[420px] bg-zinc-900 rounded-[30px] overflow-hidden border border-white/10 glass-card">
                    {/* Profile Character Image */}
                    <img
                      src="/profile-character.png"
                      alt="Developer Profile"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                      <p className="text-white font-bold text-xl mb-1">Developer</p>
                      <p className="text-white/50 text-sm italic">"Focus on user experience"</p>
                    </div>
                  </div>

                  {/* Floating Tech Badges or Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 p-4 glass-card border-violet-500/30"
                  >
                    <div className="w-12 h-12 bg-violet-600/20 rounded-full flex items-center justify-center">
                      <Code className="text-violet-400" size={24} />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-20 flex flex-col items-center gap-2 text-white/30"
            >
              <span className="text-xs uppercase tracking-widest">Scroll Down</span>
              <ChevronDown size={20} />
            </motion.div>
          </div>
        </section >

        {/* 2. Key Projects Section */}
        < section id="projects" className="py-32 container mx-auto px-6" >
          <SectionTitle subtitle="선별된 주요 프로젝트 성과">Featured Works</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer hover:shadow-2xl hover:shadow-violet-600/20 transition-all duration-500 border-white/5 hover:border-violet-500/50 p-7">
                  <div className="relative h-64 mb-8 overflow-hidden rounded-2xl bg-black/40 border border-white/10 shadow-inner">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      {project.image}
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-6 group-hover:text-violet-400 transition-colors text-white tracking-tight">
                    {project.title}
                  </h3>

                  <div className="space-y-2 mb-6 text-sm break-keep">
                    <div className="flex gap-2 text-violet-400">
                      <span className="font-semibold min-w-[70px]">Why:</span>
                      <span className="text-white/70 italic text-xs leading-relaxed">{project.motivation}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-violet-400 font-black min-w-[80px] uppercase text-[11px] tracking-widest mt-1">Goal</span>
                      <span className="text-white font-medium">{project.goal}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-violet-400 font-black min-w-[80px] uppercase text-[11px] tracking-widest mt-1">Role</span>
                      <span className="text-white font-medium">{project.role}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-violet-400 font-black min-w-[80px] uppercase text-[11px] tracking-widest mt-1">Period</span>
                      <span className="text-white/60 font-mono text-sm">{project.period}</span>
                    </div>
                  </div>

                  <p className="text-white/80 mb-10 text-[15px] leading-loose break-keep border-t border-white/10 pt-8 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] px-2 py-1 rounded-full border border-white/10 bg-white/5 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between items-center border-t border-white/20 pt-6">
                    <div className="flex gap-5">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={22} className="text-white/60 hover:text-violet-400 transition-colors" />
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={22} className="text-white/60 hover:text-violet-400 transition-colors" />
                      </a>
                    </div>
                    <span className="text-[13px] font-black text-violet-400 hover:text-violet-300 transition-colors cursor-pointer uppercase tracking-wider">
                      View Project →
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section >

        {/* 3. Tech Stack Section */}
        < section id="skills" className="py-32 bg-white/[0.02]" >
          <div className="container mx-auto px-6">
            <SectionTitle subtitle="보유 기술 및 숙련도">Tech Spectrum</SectionTitle>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "React", level: "Advanced", icon: <Code /> },
                { name: "JavaScript", level: "Expert", icon: <Code /> },
                { name: "CSS", level: "Expert", icon: <Layers /> },
                { name: "API Integration", level: "Advanced", icon: <Layers /> },
                { name: "Git / GitHub", level: "Expert", icon: <Code /> },
                { name: "Figma", level: "Advanced", icon: <Code /> },
                { name: "Netlify", level: "Intermediate", icon: <Layers /> },
                { name: "Vercel", level: "Advanced", icon: <Layers /> },
                { name: "Responsive Design", level: "Advanced", icon: <Layers /> },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="flex items-center gap-4 py-6">
                    <div className="p-3 rounded-lg bg-violet-600/10 text-violet-400">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{skill.name}</h4>
                      <p className="text-xs text-white/40">{skill.level}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section >

        {/* 6. Misc (Contact) Section */}
        < section id="contact" className="py-40 container mx-auto px-6" >
          <Card className="bg-gradient-to-br from-violet-600/10 to-pink-600/10 border-violet-500/20 py-24 text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-7xl font-black mb-8"
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
        </section >

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
                className="relative w-full max-w-2xl glass-card p-8 md:p-12 border-violet-500/30"
              >
                <button
                  onClick={() => setIsEmailModalOpen(false)}
                  className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                >
                  <X size={28} />
                </button>

                <h3 className="text-3xl md:text-4xl font-black mb-3 gradient-text">
                  Get In Touch
                </h3>
                <p className="text-white/60 mb-8">
                  프로젝트 문의나 협업 제안을 보내주세요!
                </p>

                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold hover:shadow-lg hover:shadow-violet-600/50 transition-all"
                    >
                      이메일 보내기
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEmailModalOpen(false)}
                      className="px-8 py-4 rounded-full border border-white/10 bg-white/5 font-bold hover:bg-white/10 transition-all"
                    >
                      취소
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main >

      <footer className="py-12 border-t border-white/10 text-center text-white/30 text-sm">
        <p>© 2026 Developer Portfolio. Built with Next.js & Framer Motion.</p>
      </footer>
    </div >
  );
}
