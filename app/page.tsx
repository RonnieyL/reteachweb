"use client";

import Image from "next/image";
import Orb from "../components/Orb";
import Carousel from "../components/Carousel";
import { useState } from "react";
import { createEntry } from "./actions";

export default function Home() {
  const [email, setEmail] = useState("")

  async function handleWaitlist() {
    createEntry(email)
  }

  const carouselCards = [
    {
      id: 1,
      icon: "🤖",
      title: "AI Chat Assistant",
      description: "Have conversations with your notes to extract insights and get answers instantly."
    },
    {
      id: 2,
      icon: "✍️",
      title: "Smart Writing",
      description: "AI-powered writing assistance that understands context and improves your content."
    },
    {
      id: 3,
      icon: "🎨",
      title: "Visual Sketching",
      description: "Draw, sketch, and annotate with intuitive tools that enhance your visual thinking."
    },
    {
      id: 4,
      icon: "🧠",
      title: "Mind Mapping",
      description: "Organize complex ideas with dynamic mind maps that adapt to your thought process."
    },
    {
      id: 5,
      icon: "📚",
      title: "Learning Analytics",
      description: "Track your learning progress and get personalized insights to improve retention."
    }
  ];
  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <div className="main-dotted-bg">
        <header className="max-w-7xl flex items-center justify-between px-8 py-6 mx-auto relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm">
              <img src="/logo.png" alt="Logo" />
            </div>
            <span className="text-xl font-medium text-gray-800">rewrite</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-800 font-light">Demo</a>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="main-dotted-bg px-4 sm:px-8 mx-auto relative flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        {/* Background Orb */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] relative scale-[1.2] sm:scale-[1.4] md:scale-[1.6]">
            <Orb
              hoverIntensity={0.2}
              rotateOnHover={true}
              hue={20}
              forceHoverState={false}
            />
          </div>
        </div> */}

        {/* Centered Content */}
        <div className="mb-16 space-y-4 sm:space-y-6 relative z-10 text-center max-w-3xl pointer-events-none px-4">
          {/* Social Proof */}
          {/* <div className="flex items-center justify-center gap-3">
            <span className="text-gray-600 font-light">Used by over 3000k+ Students</span>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-white"></div>
            </div>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light max-w-xl mx-auto text-gray-900 leading-tight">
            Your notes were not being used right, <span className="highlight">until now</span>.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light mx-auto max-w-xl py-3">
            Get the most out of your notes by interacting with them.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <div
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-colors cursor-pointer pointer-events-auto text-sm sm:text-base"
              onClick={handleWaitlist}
            >
              Join waitlist
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}
              className="border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-light bg-white transition-colors pointer-events-auto w-full sm:w-auto sm:min-w-[250px] text-sm sm:text-base"
            />
          </div>

          {/* Social proof */}
          <div style={{ marginTop: 100 }} className="flex flex-col items-center justify-center gap-3">
            <p className="text-gray-400 text-2xl">Used by Students At</p>
            <br />
            <div className="flex flex-row gap-[50px] pt-[20px]">
              <img className="w-[200px] h-[60px]" src="https://wp.logos-download.com/wp-content/uploads/2020/07/University_of_California_Berkeley_Logo.png?dl" alt="Logo UC Berkeley" />
              <img className="w-[200px] h-[60px]" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Hong_Kong_UST.png/250px-Hong_Kong_UST.png" alt="Logo HKUST" />
              <img className="w-[200px] h-[60px]" src="https://wp.logos-download.com/wp-content/uploads/2020/07/University_of_California_Berkeley_Logo.png?dl" alt="Logo UC Berkeley" />
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="min-h-screen bg-red-400 relative py-12 sm:py-20">
        <div className="max-w-none mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
            {/* Left Content */}
            <div className="space-y-12 sm:space-y-16 lg:pl-16 lg:pr-12 xl:pr-20 text-center lg:text-left">
              <h2 className="text-5xl sm:text-4xl lg:text-5xl font-light text-gray-200 leading-loose tracking-wide">
                Writing, Drawing, Thinking, and Learning have never been this easy.
              </h2>

              <p className="text-xl sm:text-xl text-gray-200 font-light leading-loose max-w-2xl mx-auto lg:mx-0 mt-12 tracking-wide">
                Our simple but useful AI features accelerate you without any hassle.
              </p>
            </div>

            {/* Right Content - Carousel */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
              <Carousel
                cards={carouselCards}
                autoSlideInterval={4000}
                pauseOnHover={true}
                className="group"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-light">Made with ❤️ for better note-taking</h3>
              <p className="text-gray-800 font-light max-w-md mx-auto">
                Join thousands of students and professionals who are already transforming their learning journey.
              </p>
            </div>

            <div className="flex justify-center space-x-8">
              <a href="#" className="text-gray-800 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>

              <a href="#" className="text-gray-800 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-sm">
                    <img src="/logo.png" alt="Logo" />
                  </div>
                  <span className="text-xl font-medium">rewrite</span>
                </div>

                <p className="text-gray-800 text-sm font-light">
                  © 2025 rewrite. Built for students by students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
