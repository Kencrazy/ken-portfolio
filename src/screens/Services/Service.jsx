import React from 'react';
import { Link } from 'react-router';
import BottomNav from '../../components/bottomNav';

function Service() {
  return (
    <>
      <div className="text-white p-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mt-30 hover:scale-102">
          <h4 className="text-sm uppercase tracking-widest font-semibold">How I work</h4>
          <h1 className="text-4xl font-bold mt-2">Development Process</h1>
          <p className="text-gray-400 mt-4">
            Reach your business goals with excellent user experience.
            <br />
            Let’s start working on your awesome web or iOS/Android app.
            <br />
            <span className="text-sm italic">*Note: I specialize in development and design, but I do not provide website hosting services.</span>
          </p>

          <div className="flex justify-center mt-6 gap-4">
            <Link
              to="/list"
              className="bg-blue-600 hover:bg-blue-900 hover:scale-105 hover:text-17 text-white py-2 px-6 rounded-md"
            >
              Start a project
            </Link>
          </div>
        </div>

        {/* Process Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hover:scale-105">
            <h2 className="text-2xl font-semibold">Strategy</h2>
            <p className="mt-2 text-gray-400">
              <strong>Ask first.</strong> Before jumping into developing, I always make sure that we’re asking the right questions and trying to accomplish the right challenges. This stage includes market research, competitive analyses, consulting, and exploring possible solutions.
            </p>
          </div>

          <div className="hover:scale-105">
            <h2 className="text-2xl font-semibold">Design</h2>
            <p className="mt-2 text-gray-400">
              <strong>Crafting the vision.</strong> I create intuitive and engaging designs, starting with wireframes and progressing to high-fidelity prototypes. This ensures your app or website is user-friendly and visually appealing before coding begins.
            </p>
          </div>

          <div className="hover:scale-105">
            <h2 className="text-2xl font-semibold">Developing</h2>
            <p className="mt-2 text-gray-400">
              <strong>Problem solving.</strong> At the end of this phase, you’ll have a perfect approach for your app or website. During the transition from wireframes into the final design, I create prototypes simulating final results before development.
            </p>
          </div>

          <div className="hover:scale-105">
            <h2 className="text-2xl font-semibold">Testing & Deployment</h2>
            <p className="mt-2 text-gray-400">
              <strong>Ensuring quality.</strong> I rigorously test the app or website for functionality, performance, and compatibility, then handle deployment to your chosen platform. <em>(<strong>Hosting not included; I can recommend reliable hosting providers.</strong>)</em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;