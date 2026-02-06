import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    title: "Fashion Recommendation System",
    desc: "Image-based fashion recommender using feature extraction + nearest neighbors with Streamlit UI.",
    tags: ["ML", "ResNet50", "Streamlit"],
    github: "https://github.com/ChetanKumar4u/fashion",
    live: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" },
  }),
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      {/* Background glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-80px] h-[380px] w-[380px] rounded-full bg-purple-600/25 blur-[90px]" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[90px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide">
            Chetan<span className="text-cyan-300">.dev</span>
          </a>
          <div className="flex gap-6 text-sm text-white/80">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <motion.div
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={fadeUp} custom={1}>
            <p className="text-cyan-300 text-sm tracking-widest uppercase">
              Modern • Animated • Recruiter-ready
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Hi, I’m <span className="text-cyan-300">Chetan Kumar</span> 👋
              <br />
              I build sleek web apps & interactive experiences.
            </h1>
            <p className="mt-5 text-white/70 leading-relaxed">
              Full Stack Developer with strong frontend skills. I work with React,
              Node.js, MongoDB, and enjoy building AI/ML projects and clean UI.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-cyan-400/90 text-black font-medium hover:bg-cyan-300 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex gap-4 text-white/80">
              <a className="hover:text-white" href="https://github.com/" target="_blank">
                <FaGithub size={22} />
              </a>
              <a className="hover:text-white" href="https://linkedin.com/" target="_blank">
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={2} className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
              <p className="text-white/70 text-sm">Currently building</p>
              <h3 className="mt-2 text-xl font-semibold">
                Interactive Projects + AI/ML Apps
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {["React", "Node.js", "MongoDB", "TypeScript", "Streamlit", "Web3"].map(
                  (s) => (
                    <div
                      key={s}
                      className="rounded-2xl border border-white/10 bg-black/30 px-3 py-2 hover:-translate-y-0.5 transition"
                    >
                      {s}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 w-[70%]">
              <p className="text-white/70 text-sm">Open to</p>
              <p className="mt-1 font-semibold">Internships • Full-time Roles</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-14">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold">
            About
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-white/70 leading-relaxed">
            I’m a Computer Science student who loves building modern web apps with
            smooth UI and strong logic. I also explore AI/ML projects and
            interactive data visualizations.
          </motion.p>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-14">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold">
            Skills
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              "HTML • CSS • JavaScript",
              "React • TypeScript",
              "Node.js • Express",
              "MongoDB • SQL basics",
              "Git • GitHub • BASH",
              "ML Basics • Streamlit",
            ].map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:-translate-y-1 transition"
              >
                {x}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-14">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold">
            Projects
          </motion.h2>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                custom={i + 1}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/70">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-black/30 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-sm"
                    href={p.github}
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    className="px-4 py-2 rounded-xl bg-cyan-400/90 text-black hover:bg-cyan-300 transition text-sm font-medium"
                    href={p.live}
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-14">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold">
            Contact
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-white/70">
            Want to collaborate or hire me? Drop a message 👇
          </motion.p>

          <motion.form
            variants={fadeUp}
            custom={3}
            className="mt-7 grid gap-4 max-w-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="rounded-2xl bg-white/5 border border-white/10 p-3 outline-none focus:border-cyan-300"
              placeholder="Your Name"
            />
            <input
              className="rounded-2xl bg-white/5 border border-white/10 p-3 outline-none focus:border-cyan-300"
              placeholder="Your Email"
            />
            <textarea
              className="rounded-2xl bg-white/5 border border-white/10 p-3 outline-none focus:border-cyan-300 min-h-[120px]"
              placeholder="Your Message"
            />
            <button
              className="px-5 py-3 rounded-2xl bg-cyan-400/90 text-black font-semibold hover:bg-cyan-300 transition"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Chetan Kumar • Built with React
      </footer>
    </div>
  );
}
