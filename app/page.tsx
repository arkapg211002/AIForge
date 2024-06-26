import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">AIForge<span className="text-green-700">.</span></span>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <a href="#_" target="_blank" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</a>
              <a href="https://arkapg211002.github.io/" target="_blank" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Portfolio</a>
              <a href="https://www.linkedin.com/in/arkapratim-ghosh21102002/" target="_blank" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">LinkedIn</a>
              <a href="https://github.com/arkapg211002" target="_blank" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">GitHub</a>
            </nav>
          </div>

          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">

            <a href="/dashboard" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-green-700 border border-transparent rounded-md shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Useful Tools to</span>
                  <span className="block text-green-600 xl:inline"> Help You Create Faster.</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">It's never been easier to create beautiful content that convey your message and tell your story.</p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a href="/dashboard" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-green-600 rounded-md sm:mb-0 hover:bg-green-700 sm:w-auto">
                    Try It Free
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                  <a href="https://github.com/arkapg211002/AIForge" target="_blank" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="/services/landing_page_photo.avif" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

          {/* Image */}
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="/services/landpage1.gif" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
          </div>

          {/* Content */}
          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Boost Productivity
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Build a creative atmosphere in your organization.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-700 rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-700 rounded-full"><span className="text-sm font-bold">✓</span></span> Transform concepts into polished content rapidly
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-700 rounded-full"><span className="text-sm font-bold">✓</span></span> Generate ideas instantly with AI-powered brainstorming.
              </li>
            </ul>
          </div>
          {/* End Content */}
        </div>
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

          {/* Content */}
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Speed Up Creativity
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Save time and money with our revolutionary services.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-700 rounded-full"><span className="text-sm font-bold">✓</span></span> Automated task workflow
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-700 rounded-full"><span className="text-sm font-bold">✓</span></span> Detailed analysis and review
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-700 rounded-full"><span className="text-sm font-bold">✓</span></span> Experiment freely with AI-driven editing features.
              </li>
            </ul>
          </div>
          {/* Image */}
          <div className="box-border relative w-full max-w-md px-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:mb-0 md:ml-0 md:w-1/2 xl:pl-0">
            <img src="/services/landpage2.gif" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
          </div>
          {/* End Content */}
        </div>
       
      </section>
      {/* Footer */}
      <footer className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="flex flex-col items-center md:flex-row">
            <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">AIForge<span className="text-green-600">.</span></span>
            </a>
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a href="#" className="ml-3 text-gray-500">
                © 2024 Arkapratim Ghosh<span className="text-green-600">.</span> All rights reserved.
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
