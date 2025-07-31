"use client";

import Image from "next/image";
import Orb from "../components/Orb";
// import Carousel from "../components/Carousel";
import { neon } from "@neondatabase/serverless";
import { useState } from "react";
import { createEntry } from "./actions";
import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';

export default function Home() {
  const [email, setEmail] = useState("")

  // Zod schema for email validation
  const emailSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address")
      .max(254, "Email address is too long")
      .refine(
        (email) => !email.includes('..'), 
        { message: "Email cannot contain consecutive dots" }
      )
      .refine(
        (email) => !email.startsWith('.') && !email.endsWith('.'), 
        { message: "Email cannot start or end with a dot" }
      )
  })

  async function handleWaitlist() {
    // Validate email using Zod
    const validation = emailSchema.safeParse({ email: email.trim() })
    
    if (!validation.success) {
      // Get the first validation error and show it
      const firstError = validation.error.issues[0]
      toast.error(firstError.message)
      return
    }
    
    try {
      // validation.data.email is guaranteed to be valid
      await createEntry(validation.data.email)
      setEmail("") // Clear the input
      toast.success('Successfully added to waitlist! 🎉')
    } catch (error) {
      console.error('Error adding to waitlist:', error)
      toast.error('Something went wrong. Please try again.')
    }
  }

  // const carouselCards = [
  //   {
  //     id: 1,
  //     icon: "🤖",
  //     title: "AI Chat Assistant",
  //     description: "Have conversations with your notes to extract insights and get answers instantly."
  //   },
  //   {
  //     id: 2,
  //     icon: "✍️",
  //     title: "Smart Writing",
  //     description: "AI-powered writing assistance that understands context and improves your content."
  //   },
  //   {
  //     id: 3,
  //     icon: "🎨",
  //     title: "Visual Sketching",
  //     description: "Draw, sketch, and annotate with intuitive tools that enhance your visual thinking."
  //   },
  //   {
  //     id: 4,
  //     icon: "🧠",
  //     title: "Mind Mapping",
  //     description: "Organize complex ideas with dynamic mind maps that adapt to your thought process."
  //   },
  //   {
  //     id: 5,
  //     icon: "📚",
  //     title: "Learning Analytics",
  //     description: "Track your learning progress and get personalized insights to improve retention."
  //   }
  // ];
  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <div className="main-dotted-bg">
        <header className="max-w-7xl flex items-center justify-between px-8 py-8 mx-auto relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm">
              <img src="/logo.png" alt="Logo" />
            </div>
            <span className="text-2xl font-medium text-gray-800">rewrite</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="bg-[#ed2d7a] hover:bg-[#d1246a] text-white px-6 py-3 rounded-lg font-medium transition-colors text-base">
              see it urself
            </button>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="main-dotted-bg px-4 sm:px-8 mx-auto relative flex items-center justify-center overflow-hidden" style={{ minHeight: 'calc(100vh - 80px)' }}>
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
        <div className="mb-16 space-y-4 sm:space-y-6 relative z-10 text-center max-w-5xl w-full pointer-events-none px-2 sm:px-4">
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
              className="bg-[#ed2d7a] hover:bg-[#d1246a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-colors cursor-pointer pointer-events-auto text-sm sm:text-base"
              onClick={handleWaitlist}
            >
              Join waitlist
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="border border-gray-300 focus:border-[#ed2d7a] focus:outline-none text-gray-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-light bg-white transition-colors pointer-events-auto w-full sm:w-auto sm:min-w-[250px] text-sm sm:text-base"
            />
          </div>

          {/* Social proof */}
          <div style={{ marginTop: 100 }} className="flex flex-col items-center justify-center gap-3 px-4">
            <p className="text-gray-400 text-xl sm:text-2xl text-center">Used by Students At</p>
            <br />
                         <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-[50px] pt-[20px] items-center justify-center w-full overflow-hidden">
               <img className="w-[150px] sm:w-[180px] lg:w-[200px] h-[45px] sm:h-[55px] lg:h-[60px] object-contain" src="https://wp.logos-download.com/wp-content/uploads/2020/07/University_of_California_Berkeley_Logo.png?dl" alt="Logo UC Berkeley" />
               <img className="w-[150px] sm:w-[180px] lg:w-[200px] h-[45px] sm:h-[55px] lg:h-[60px] object-contain" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Hong_Kong_UST.png/250px-Hong_Kong_UST.png" alt="Logo HKUST" />
               <img className="w-[150px] sm:w-[180px] lg:w-[200px] h-[45px] sm:h-[55px] lg:h-[60px] object-contain" src="/stanford.png" alt="Logo Stanford University" />
             </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="min-h-screen bg-red-400 relative py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center min-h-screen">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8 sm:space-y-12 lg:space-y-16 lg:pl-4 lg:pr-8 xl:pr-12 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-200 leading-relaxed sm:leading-loose tracking-wide">
                Writing, Drawing, Thinking, and Learning have never been this easy.
              </h2>

              <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 tracking-wide">
                Our simple but useful AI features accelerate you without any hassle.
              </p>
            </div>

            {/* Right Content - Video Placeholder */}
            <div className="lg:col-span-3 relative mt-8 lg:mt-0 w-full">
              <div className="relative w-full bg-gray-900 rounded-xl overflow-hidden shadow-lg aspect-video max-w-4xl mx-auto">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gray-700 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-xl font-medium">Video Demo</p>
                    <p className="text-base text-gray-400 mt-2">1920 × 1080</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Commented out Carousel */}
            {/* <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] mt-8 lg:mt-0 w-full">
              <Carousel
                cards={carouselCards}
                autoSlideInterval={4000}
                pauseOnHover={true}
                className="group"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-light">Made with ❤️ for better note-taking</h3>
              <p className="text-gray-800 font-light max-w-md mx-auto text-sm sm:text-base px-4">
                Join thousands of students and professionals who are already transforming their learning journey.
              </p>
            </div>

            <div className="flex justify-center space-x-6 sm:space-x-8">
              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>

              <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <div className="border-t border-gray-300 pt-6 sm:pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-sm">
                    <img src="/logo.png" alt="Logo" />
                  </div>
                  <span className="text-lg sm:text-xl font-medium">rewrite</span>
                </div>

                <p className="text-gray-700 text-xs sm:text-sm font-light text-center">
                  © 2025 rewrite. Built for students by students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* React Hot Toast */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '500',
            padding: '12px 16px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
          success: {
            style: {
              background: '#10B981',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#10B981',
            },
          },
          error: {
            style: {
              background: '#EF4444',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#EF4444',
            },
          },
        }}
      />
    </div>
  );
}
