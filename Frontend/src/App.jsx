import React, { useState } from "react";
import { MessageSquare, Github, Youtube, Database, Brain, Code, Linkedin } from 'lucide-react';
const Logo ="https://res.cloudinary.com/dtcbbzlix/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1736502238/png-transparent-social-media-icons-search-engine-optimization-analytics-marketing-analysis-diens-report-business_tky02q.png"

export default function Home() {
  const [inputValue, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        "https://social-analyics-app-team-dryrun.koyeb.app/api/v1/analytics",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputValue }),
        }
      );
      const data = await res.json();
      console.log(data);
      setResponse(data.message);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Failed to fetch analysis.");
    }
    setLoading(false);
  };

  const techStack = [
    {
      icon: <Brain className="w-8 h-8" />,
      name: "Langflow",
      description: "AI-powered workflow automation",
      color: "from-blue-400 to-indigo-600",
    },
    {
      icon: <Database className="w-8 h-8" />,
      name: "AstraDB",
      description: "Scalable cloud database solution",
      color: "from-indigo-400 to-purple-600",
    },
    {
      icon: <Code className="w-8 h-8" />,
      name: "LangChain",
      description: "Language model integration framework",
      color: "from-purple-400 to-pink-600",
    },
  ];

  const teamMembers = [
    {
      name: "TANAY NAGDE",
      bio: "Specializing in Full stack Development and Data Analytics",
      image: "https://res.cloudinary.com/dtcbbzlix/image/upload/v1736501691/1723711205948_jprfoq.jpg",
      color: "from-blue-500 to-indigo-600",
      links: {
        github: "https://github.com/tanay-nagde",
        linkedin: "https://www.linkedin.com/in/tanay-nagde-17985b1a6/",
      },
    },
    {
      name: "Ayush Maddhesiya",
      bio: "Expertise in Full stack Android Development and Backend Development",
      image: "https://res.cloudinary.com/dtcbbzlix/image/upload/v1736501848/WhatsApp_Image_2025-01-10_at_15.06.28_f1d4083d_chix8o.jpg",
      color: "from-indigo-500 to-purple-600",
      links: {
        github: "https://github.com/ayush-maddhesiya",
        linkedin: "https://www.linkedin.com/in/ayush-maddhesiya",
      },
    },
    {
      name: "pranjal birla",
      bio: "Expertise in Python Development and Data Science",
      image: "https://res.cloudinary.com/dtcbbzlix/image/upload/v1736501847/WhatsApp_Image_2025-01-10_at_15.03.29_a71c62e1_vyvs8t.jpg",
      color: "from-purple-500 to-pink-600",
      links: {
        github: "https://www.github.com/birlaPranjal",
        linkedin: "https://www.linkedin.com/in/pranjal-birla/",
      },
    },
    {
      name: "kushagra rai",
      bio: "Web Development",
      image: "https://res.cloudinary.com/dtcbbzlix/image/upload/v1736501847/WhatsApp_Image_2025-01-10_at_15.07.02_888dd891_ewgcjg.jpg",
      color: "from-pink-500 to-rose-600",
      links: {
        github: "https://github.com/kushagra-raii",
        linkedin: "https://www.linkedin.com/in/kushagra-raii?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <header className="border-b border-white/10 backdrop-blur-xl bg-black/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/5 rounded-lg">
                <img src={Logo} alt="PostUp" width={35} height={35} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
             social analyser
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ayush-maddhesiya/temp-social"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                //todo: add youtube link
                href="https://www.youtube.com/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition-opacity"
              >
                <Youtube className="w-5 h-5" />
                <span>Watch Demo</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-24">
        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Analyze Your
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Social Media Content
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Leverage AI to optimize your social media strategy and boost
              engagement
            </p>
            <div className="p-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
              <form
                onSubmit={handleSubmit}
                className="bg-slate-900 rounded-xl p-6"
              >
                <textarea
                  value={inputValue}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Eg: which type of post is most engaging and which age group is most involved in it and what time of day users are most active in it on which device type"
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                  rows="6"
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/20 border-t-white"></div>
                      Analyzing...
                    </span>
                  ) : (
                    "Analyze"
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="space-y-6">
            {response && (
              <div className="p-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-indigo-400" />
                    Analysis Results
                  </h3>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-slate-300">{response}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Powered by Advanced Tech
            </h2>
            <p className="text-slate-400">
              Built with cutting-edge technologies for optimal performance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity blur-xl`}
                />
                <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all backdrop-blur-sm">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tech.color} mb-4`}
                  >
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-slate-400">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Passionate experts committed to revolutionizing social media
              content creation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                <div className="relative bg-slate-800 p-6 rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mb-4 ring-2 ring-purple-500/50"
                  />
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-400 mb-3">{member.role}</p>
                  <p className="text-slate-400 mb-4">{member.bio}</p>
                  <div className="flex gap-4">
                    {Object.entries(member.links).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-indigo-400 transition-colors"
                      >
                        {platform === "github" && (
                          <Github className="w-5 h-5" />
                        )}
                        {platform === "linkedin" && (
                          <Linkedin className="w-5 h-5" />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold">See It In Action</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Watch our demo to see how Post up can transform your social media
            strategy
          </p>
          <a
            href="https://youtube.com/your-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:opacity-90 transition-opacity text-lg font-semibold"
          >
            <Youtube className="w-6 h-6" />
            Watch Demo Video
          </a>
        </section>
      </main>
      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <p className="text-center text-slate-400">
            © {new Date().getFullYear()} 
            social analyser. Built with passion by our
            amazing team.
          </p>
        </div>
      </footer>
    </div>
  );
}

