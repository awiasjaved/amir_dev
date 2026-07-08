"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Playfair_Display, Manrope } from "next/font/google";
import { useState, useEffect, useRef, useCallback } from "react";
import { FaReact, FaNodeJs, FaBars, FaTimes, FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiMysql,
  SiGithub,
  SiGit,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiLinkedin,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

/* Editorial pairing: a serif display face carries the personality,
   a quiet grotesque handles everything functional. */
const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const NAV_LINKS = ["About", "Craft", "Work", "Contact"];

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact size={30} color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={30} className="text-current" /> },
      { name: "HTML5", icon: <SiHtml5 size={30} color="#E34C26" /> },
      { name: "CSS3", icon: <SiCss3 size={30} color="#264DE4" /> },
      { name: "JavaScript", icon: <SiJavascript size={30} color="#F7DF1E" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={30} color="#06B6D4" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs size={30} color="#68A063" /> },
      { name: "Express.js", icon: <SiExpress size={30} className="text-current" /> },
      { name: "Python", icon: <SiPython size={30} color="#3776AB" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens size={30} color="#D63AFF" /> },
    ],
  },
  {
    title: "Database & API",
    items: [
      { name: "MongoDB", icon: <SiMongodb size={30} color="#47A248" /> },
      { name: "MySQL", icon: <SiMysql size={30} color="#4479A1" /> },
      { name: "REST API", icon: <TbApi size={30} color="#D4AF6A" /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "GitHub", icon: <SiGithub size={30} className="text-current" /> },
      { name: "Git", icon: <SiGit size={30} color="#F05032" /> },
    ],
  },
];

const PROJECTS = [
  {
    title: "Al-Saeed Foundation",
    tag: "Charity Platform",
    desc: "A full charity foundation website for education, healthcare, and social welfare — donation system, bilingual content (English/Urdu), school information, and a calm, trustworthy design for community outreach.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: "/images/alsaeedfoundation.png",
    link: "https://al-saeed-foundation.vercel.app/",
  },
  {
    title: "Al-Saeed Admin Dashboard",
    tag: "Admin System",
    desc: "A full-stack admin panel for managing foundation data — secure login, role-based access, CRUD operations, data tables, and analytics for efficient content management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/alsaeed-adminportal.png",
  },
  {
    title: "Little Mu'mins",
    tag: "E-Commerce",
    desc: "An e-commerce book shop for Islamic children's books — product catalog, cart system, category filters by age and type, and a warm, child-friendly design.",
    tech: ["Next.js", "React", "E-commerce"],
    image: "/images/littlemumins.png",
    link: "https://little-mumins.vercel.app/",
  },
];

const OTHER_REPOS = [
  { url: "https://github.com/Amir16sp/Yaseen-rent-car", company: false },
  { url: "https://github.com/Amir16sp/Latest", company: false },
];

interface Glow {
  id: number;
  x: number;
  y: number;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [spot, setSpot] = useState({ x: -400, y: -400 });
  const [glows, setGlows] = useState<Glow[]>([]);
  const glowCounter = useRef(0);
  const lastGlow = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setSpot({ x: e.clientX, y: e.clientY });
    const dx = e.clientX - lastGlow.current.x;
    const dy = e.clientY - lastGlow.current.y;
    if (Math.sqrt(dx * dx + dy * dy) < 40) return;
    lastGlow.current = { x: e.clientX, y: e.clientY };
    const id = glowCounter.current++;
    setGlows((prev) => [...prev.slice(-8), { id, x: e.clientX, y: e.clientY }]);
  }, []);

  const removeGlow = useCallback((id: number) => {
    setGlows((prev) => prev.filter((g) => g.id !== id));
  }, []);

  const gold = darkMode ? "#D4AF6A" : "#9C7A32";
  const bg = darkMode ? "bg-[#0B0A08]" : "bg-[#FAF7F0]";
  const textMain = darkMode ? "text-[#F3EEE3]" : "text-[#1C1710]";
  const textMuted = darkMode ? "text-[#B9AFA0]" : "text-[#5C5344]";
  const panel = darkMode ? "bg-[#141210]" : "bg-white";
  const panelBorder = darkMode ? "border-[#2C2620]" : "border-[#E7DFCE]";

  return (
    <main
      onMouseMove={handleMouseMove}
      className={`${serif.variable} ${sans.variable} font-[family-name:var(--font-sans)] min-h-screen relative overflow-x-hidden transition-colors duration-500 ${bg} ${textMain}`}
    >
      {/* Ambient spotlight following the cursor */}
      <div
        className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${spot.x}px ${spot.y}px, ${
            darkMode ? "rgba(212,175,106,0.08)" : "rgba(156,122,50,0.10)"
          }, transparent 70%)`,
        }}
      />

      {/* Faint gold trail sparks */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        <AnimatePresence>
          {glows.map((g) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0.6, scale: 0.4 }}
              animate={{ opacity: 0, scale: 1.6, y: g.y - 30 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              onAnimationComplete={() => removeGlow(g.id)}
              style={{
                position: "fixed",
                left: g.x - 2,
                top: g.y - 2,
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: gold,
                boxShadow: `0 0 8px ${gold}`,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Ambient gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: gold }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full blur-[130px] opacity-10"
          style={{ background: darkMode ? "#8B6D3F" : "#D4AF6A" }}
        />
      </div>

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 px-5 md:px-10 pt-6">
        <nav
          className={`max-w-6xl mx-auto rounded-full border backdrop-blur-xl px-6 md:px-10 py-4 flex items-center justify-between ${panelBorder} ${
            darkMode ? "bg-[#0B0A08]/70" : "bg-white/70"
          }`}
        >
          <span className="font-[family-name:var(--font-serif)] italic text-lg md:text-xl tracking-wide">
            Hafiz Muhammad Amir Saeed
          </span>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toUpperCase()}`}
                className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${textMuted} hover:text-[${gold}]`}
                style={{ ["--hover-color" as string]: gold }}
                onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {link}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`w-11 h-6 rounded-full border relative transition-colors ${panelBorder}`}
              style={{ background: darkMode ? "#241F19" : "#F0E9D8" }}
            >
              <span
                className="absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300"
                style={{
                  left: darkMode ? "22px" : "2px",
                  background: gold,
                }}
              />
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`w-10 h-6 rounded-full border relative ${panelBorder}`}
              style={{ background: darkMode ? "#241F19" : "#F0E9D8" }}
            >
              <span
                className="absolute top-0.5 w-5 h-5 rounded-full transition-all duration-300"
                style={{ left: darkMode ? "18px" : "2px", background: gold }}
              />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden max-w-6xl mx-auto mt-2 rounded-2xl border backdrop-blur-xl overflow-hidden ${panelBorder} ${
                darkMode ? "bg-[#0B0A08]/90" : "bg-white/90"
              }`}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toUpperCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-6 py-3 text-sm font-semibold tracking-widest uppercase ${textMuted}`}
                >
                  {link}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* HERO */}
      <section className="relative z-10 px-6 pt-40 pb-24 md:pt-52 md:pb-32 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="uppercase text-xs md:text-sm tracking-[0.35em] font-semibold mb-6"
              style={{ color: gold }}
            >
              MERN Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-[family-name:var(--font-serif)] font-semibold leading-[1.05] text-5xl sm:text-6xl md:text-7xl mb-6"
            >
              Hafiz Muhammad
              <br />
              <span className="italic" style={{ color: gold }}>
                Amir Saeed
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className={`max-w-xl mx-auto md:mx-0 text-base md:text-lg leading-relaxed ${textMuted}`}
            >
              I design and build refined, high-performance web applications
              with React, Next.js, Node.js and MongoDB — where craftsmanship
              meets clean engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start"
            >
              <a
                href="#WORK"
                className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-transform hover:-translate-y-0.5"
                style={{ background: gold, color: darkMode ? "#0B0A08" : "#FAF7F0" }}
              >
                View my work
              </a>
              <a
                href="#CONTACT"
                className={`px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide border transition-transform hover:-translate-y-0.5 ${panelBorder}`}
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto"
          >
            <div
              className="absolute inset-0 rounded-[2rem] blur-2xl opacity-30 scale-105"
              style={{ background: gold }}
            />
            <div
              className={`relative rounded-[2rem] border p-2 ${panelBorder} ${panel}`}
              style={{ boxShadow: `0 30px 60px -20px ${darkMode ? "rgba(0,0,0,0.6)" : "rgba(156,122,50,0.25)"}` }}
            >
              <Image
                src="/images/amir_dev.jpeg"
                alt="Hafiz Muhammad Amir Saeed - MERN Stack Developer"
                width={340}
                height={420}
                priority
                className="w-56 sm:w-64 md:w-full h-auto rounded-[1.6rem] object-cover object-top"
              />
            </div>
            <div
              className={`absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase border ${panelBorder} ${panel}`}
              style={{ color: gold }}
            >
              Available for Work
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thin gold divider */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="h-px w-full" style={{ background: `linear-gradient(to right, transparent, ${gold}, transparent)` }} />
      </div>

      {/* ABOUT */}
      <section id="ABOUT" className="relative z-10 scroll-mt-28 px-6 py-24 md:py-28 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase text-xs tracking-[0.35em] font-semibold mb-4 text-center md:text-left"
          style={{ color: gold }}
        >
          About
        </motion.p>
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-semibold leading-snug"
          >
            Building digital products that feel as good as they work.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`space-y-5 text-base leading-relaxed ${textMuted}`}
          >
            <p>
              I&apos;m <span className={`font-semibold ${textMain}`}>Hafiz Muhammad Amir Saeed</span>, a
              MERN Stack Developer focused on building modern, scalable, and
              high-performance web applications. I enjoy turning ideas into
              clean, considered digital products that solve real-world
              problems.
            </p>
            <p>
              I work across the full stack — from responsive frontends with
              React &amp; Next.js to robust backends using Node.js, Express,
              and MongoDB, with hands-on experience in REST APIs, JWT
              authentication, admin dashboards, and e-commerce solutions.
            </p>
            <p className="font-semibold" style={{ color: gold }}>
              Currently open to freelance projects and full-time opportunities.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Stack", value: "MERN" },
                { label: "Focus", value: "Full-Stack" },
                { label: "Build", value: "Web Apps" },
                { label: "Status", value: "Available" },
              ].map((item) => (
                <div key={item.label} className={`rounded-2xl border p-4 text-center ${panelBorder} ${panel}`}>
                  <p className={`text-[10px] tracking-widest uppercase mb-1 ${textMuted}`}>{item.label}</p>
                  <p className="font-[family-name:var(--font-serif)] font-semibold text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="h-px w-full" style={{ background: `linear-gradient(to right, transparent, ${gold}, transparent)` }} />
      </div>

      {/* CRAFT / SKILLS */}
      <section id="CRAFT" className="relative z-10 scroll-mt-28 px-6 py-24 md:py-28 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase text-xs tracking-[0.35em] font-semibold mb-4 text-center"
          style={{ color: gold }}
        >
          Craft
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-semibold text-center mb-16"
        >
          Tools of the trade
        </motion.h3>

        <div className="space-y-14">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
            >
              <h4 className="font-[family-name:var(--font-serif)] italic text-xl mb-6" style={{ color: gold }}>
                {group.title}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5 }}
                    className={`rounded-2xl border p-5 flex flex-col items-center gap-3 text-center transition-colors ${panelBorder} ${panel}`}
                  >
                    {skill.icon}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="h-px w-full" style={{ background: `linear-gradient(to right, transparent, ${gold}, transparent)` }} />
      </div>

      {/* WORK / PROJECTS */}
      <section id="WORK" className="relative z-10 scroll-mt-28 px-6 py-24 md:py-28 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase text-xs tracking-[0.35em] font-semibold mb-4 text-center"
          style={{ color: gold }}
        >
          Selected Work
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-semibold text-center mb-16"
        >
          A few things I&apos;ve built
        </motion.h3>

        <div className="space-y-10">
          {PROJECTS.map((project, index) => {
            const reversed = index % 2 === 1;
            const Wrapper = project.link ? motion.a : motion.div;
            return (
              <Wrapper
                key={project.title}
                {...(project.link
                  ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05 * index }}
                whileHover={{ y: -4 }}
                className={`group grid md:grid-cols-2 gap-8 items-center rounded-3xl border p-4 md:p-6 transition-colors ${panelBorder} ${panel} ${
                  project.link ? "cursor-pointer" : ""
                }`}
              >
                <div className={`relative aspect-video rounded-2xl overflow-hidden ${reversed ? "md:order-2" : ""}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {project.link && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <span
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                        style={{ background: gold, color: darkMode ? "#0B0A08" : "#FAF7F0" }}
                      >
                        Visit live site <FaExternalLinkAlt size={11} />
                      </span>
                    </div>
                  )}
                </div>

                <div className={reversed ? "md:order-1" : ""}>
                  <span
                    className="inline-block text-[11px] font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border"
                    style={{ color: gold, borderColor: gold }}
                  >
                    {project.tag}
                  </span>
                  <h4 className="font-[family-name:var(--font-serif)] text-2xl font-semibold mb-3">
                    {project.title}
                  </h4>
                  <p className={`text-sm md:text-base leading-relaxed mb-4 ${textMuted}`}>{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs font-medium px-3 py-1 rounded-full border ${panelBorder} ${textMuted}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-10 rounded-3xl border p-6 md:p-8 ${panelBorder} ${panel}`}
        >
          <h4 className="font-[family-name:var(--font-serif)] text-xl font-semibold mb-3">
            Additional GitHub Projects
          </h4>
          <p className={`mb-6 text-sm ${textMuted}`}>
            Note: only `AdaxionTech` repositories are company projects. Others
            are personal/collaboration repositories.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {OTHER_REPOS.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl border px-3 py-2 text-sm transition-colors break-all ${panelBorder} ${textMuted} hover:text-current`}
                style={{ ["--hover" as string]: gold }}
                onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {repo.url.replace("https://github.com/", "")}
                {repo.company ? " (Company)" : ""}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="h-px w-full" style={{ background: `linear-gradient(to right, transparent, ${gold}, transparent)` }} />
      </div>

      {/* CONTACT */}
      <section id="CONTACT" className="relative z-10 scroll-mt-28 px-6 py-24 md:py-32 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase text-xs tracking-[0.35em] font-semibold mb-4"
          style={{ color: gold }}
        >
          Contact
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl font-semibold mb-6"
        >
          Let&apos;s create something <span className="italic" style={{ color: gold }}>timeless</span>.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`max-w-xl mx-auto text-base md:text-lg mb-14 ${textMuted}`}
        >
          Have a project in mind or want to collaborate? I&apos;m always open
          to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {[
            {
              label: "Email",
              value: "hafizamirsaeed906@gmail.com",
              href: "mailto:hafizamirsaeed906@gmail.com",
              icon: <MdEmail size={26} />,
            },
            {
              label: "GitHub",
              value: "hafizamirsaeed",
              href: "https://github.com/Amir16sp",
              icon: <SiGithub size={26} />,
            },
            {
              label: "LinkedIn",
              value: "Hafiz Muhammad Amir Saeed",
              href: "https://www.linkedin.com/in/m-amir-saeed-saeed-ahmed-7729b130b/",
              icon: <SiLinkedin size={26} />,
            },
            {
              label: "WhatsApp",
              value: "+92 301 4005270",
              href: "https://wa.me/923014005270",
              icon: <FaWhatsapp size={26} />,
            },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className={`rounded-2xl border p-6 flex flex-col items-center gap-3 transition-colors ${panelBorder} ${panel}`}
            >
              <div style={{ color: gold }}>{c.icon}</div>
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: gold }}>
                {c.label}
              </p>
              <p className={`text-xs break-all ${textMuted}`}>{c.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`mt-16 text-sm italic font-[family-name:var(--font-serif)] ${textMuted}`}
        >
          &ldquo;Good code, like good design, should feel inevitable.&rdquo;
        </motion.p>
      </section>
    </main>
  );
}