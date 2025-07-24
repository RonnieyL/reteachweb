"use client";

import Image from "next/image";
import Orb from "../components/Orb";
import Carousel from "../components/Carousel";

export default function Home() {
  const handleWaitlistClick = () => {
    // Handle waitlist signup
    console.log('Join waitlist clicked');
  };

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
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
          <span className="text-xl font-medium text-gray-800">reteach</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-800 font-light">Applications</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-light">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-light">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-light">FAQ</a>
        </nav>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-gray-800 font-light">Demo</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-light">Sign In</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-8 max-w-4xl mx-auto relative flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        {/* Background Orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] relative scale-[1.2] sm:scale-[1.4] md:scale-[1.6]">
            <Orb
              hoverIntensity={0.2}
              rotateOnHover={true}
              hue={20}
              forceHoverState={false}
            />
          </div>
        </div>

        {/* Centered Content */}
        <div className="space-y-6 sm:space-y-8 relative z-10 text-center max-w-3xl pointer-events-none px-4">
          {/* Social Proof */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-gray-600 font-light">Used by over 3000k+ Students</span>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-white"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light max-w-xl mx-auto text-gray-900 leading-tight">
              Your notes were not being used right, until now.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light mx-auto max-w-xl py-5">
             Get the most out of your notes by chatting with them.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <div 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-colors cursor-pointer pointer-events-auto text-sm sm:text-base"
              onClick={handleWaitlistClick}
            >
              Join waitlist
            </div>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-light bg-white transition-colors pointer-events-auto w-full sm:w-auto sm:min-w-[250px] text-sm sm:text-base"
            />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="min-h-screen bg-white relative py-12 sm:py-20">
        <div className="max-w-none mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
            {/* Left Content */}
            <div className="space-y-12 sm:space-y-16 lg:pl-16 lg:pr-12 xl:pr-20 text-center lg:text-left">
              <h2 className="text-5xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-loose tracking-wide">
                Writing, Drawing, Thinking, and Learning have never been this easy.
              </h2>
              
              <p className="text-xl sm:text-xl text-gray-600 font-light leading-loose max-w-2xl mx-auto lg:mx-0 mt-12 tracking-wide">
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
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-light">Made with ❤️ for better note-taking</h3>
              <p className="text-gray-400 font-light max-w-md mx-auto">
                Join thousands of students and professionals who are already transforming their learning journey.
              </p>
            </div>
            
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.081 4.735-1.18 1.297-2.663 2.183-4.43 2.654-1.78.479-3.59.371-5.396-.324-.604-.232-1.16-.609-1.612-1.165-.434-.533-.646-1.189-.646-1.942 0-.75.213-1.407.646-1.943.434-.535.996-.911 1.612-1.162 1.805-.695 3.616-.803 5.396-.324 1.767.471 3.25 1.357 4.43 2.654.53.58.969 1.206 1.323 1.881z"/>
                </svg>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
                  <span className="text-xl font-medium">reteach</span>
                </div>
                
                <p className="text-gray-400 text-sm font-light">
                  © 2024 reteach. Built with passion for learners everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
