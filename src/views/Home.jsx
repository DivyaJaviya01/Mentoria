import React from "react";
import { BuildingLibraryIcon, AcademicCapIcon, BriefcaseIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen pt-20 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-900 to-slate-900" />

        {/* Decorative blurred blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center py-16">
            {/* Left: Copy */}
            <div>
              <span className="inline-flex items-center text-xs font-semibold tracking-wide uppercase text-cyan-300/90 bg-white/5 ring-1 ring-white/10 px-3 py-1 rounded-full mb-5">
                AI-Powered Educational Guidance
              </span>
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight drop-shadow-sm">
              Your Future Isn't a Guessing Game. It's a Masterpiece
              </h1>
              <p className="mt-5 text-base md:text-lg text-slate-300/90 max-w-prose">
                Navigate your journey with personalized recommendations, comprehensive college insights,
                and curated scholarships tailored just for you. Built with modern AI to guide every step.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-900/30 transition-all">
                  Start Discovery Quiz →
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/15 backdrop-blur-md transition-all">
                  Join Community
                </button>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-slate-300/90">
                <p>👥 10,000+ Students</p>
                <p>⭐ 4.9/5 Rating</p>
                <p>🛡️ Trusted Guidance</p>
              </div>
            </div>

            {/* Right: Feature card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Your Educational Journey</h2>
              <p className="text-slate-300 mb-6">A simple roadmap to success</p>
              <ul className="space-y-4">
                {[
                  { n: 1, title: "Take Assessment", sub: "Discover your strengths" },
                  { n: 2, title: "Choose Stream", sub: "Based on your interests" },
                  { n: 3, title: "Find Colleges", sub: "Explore best options" },
                  { n: 4, title: "Secure Future", sub: "Achieve your goals" },
                ].map((step) => (
                  <li key={step.n} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white text-sm font-semibold ring-1 ring-white/15">
                      {step.n}
                    </span>
                    <div>
                      <p className="text-white font-semibold">{step.title}</p>
                      <p className="text-slate-300 text-sm">{step.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-6 font-semibold text-white/90">
                <p>
                  95%
                  <span className="block text-sm font-normal text-slate-300">Success Rate</span>
                </p>
                <p>
                  10K+
                  <span className="block text-sm font-normal text-slate-300">Students Guided</span>
                </p>
                <p>
                  120+
                  <span className="block text-sm font-normal text-slate-300">Partner Colleges</span>
                </p>
              </div>
            </div>
          </div>

          {/* removed in-hero stats */}
        </div>
      </section>

      {/* New white section with stats */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="bg-white/90 rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {/* Government Colleges */}
              <div className="p-6 flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl text-white flex items-center justify-center shadow-md bg-gradient-to-br from-blue-600 to-indigo-600">
                  <BuildingLibraryIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 tracking-tight">500+</div>
                  <div className="text-sm text-slate-600 mt-1">Government Colleges</div>
                </div>
              </div>
              {/* Scholarship Programs */}
              <div className="p-6 flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl text-white flex items-center justify-center shadow-md bg-gradient-to-br from-emerald-600 to-teal-600">
                  <AcademicCapIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 tracking-tight">50+</div>
                  <div className="text-sm text-slate-600 mt-1">Scholarship Programs</div>
                </div>
              </div>
              {/* Career Paths */}
              <div className="p-6 flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl text-white flex items-center justify-center shadow-md bg-gradient-to-br from-violet-600 to-purple-600">
                  <BriefcaseIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 tracking-tight">100+</div>
                  <div className="text-sm text-slate-600 mt-1">Career Paths</div>
                </div>
              </div>
              {/* Languages Supported */}
              <div className="p-6 flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl text-white flex items-center justify-center shadow-md bg-gradient-to-br from-amber-600 to-orange-600">
                  <GlobeAltIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 tracking-tight">10+</div>
                  <div className="text-sm text-slate-600 mt-1">Languages Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
