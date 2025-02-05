import React from 'react'
import BottomNav from '../../components/bottomNav'
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
            Let’s start working on your awesome web or iOS app.
            </p>

            <div className="flex justify-center mt-6 gap-4">
            <button className="bg-blue-600 hover:bg-blue-900 hover:scale-105 hover:text-17 text-white py-2 px-6 rounded-md">
                Start a project
            </button>
            </div>
        </div>

        {/* Process Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className='hover:scale-105'>
            <h2 className="text-2xl font-semibold">Strategy</h2>
            <p className="mt-2 text-gray-400">
                <strong>Ask first.</strong> Before jumping into developing, I always make sure that we’re asking the right questions and trying to accomplish the right challenges. This stage includes market research, competitive analyses, consulting, and exploring possible solutions.
            </p>
            </div>

            <div className='hover:scale-105'>
            <h2 className="text-2xl font-semibold">Developing</h2>
            <p className="mt-2 text-gray-400 mb-20">
                <strong>Problem solving.</strong> At the end of this phase, you’ll have a perfect approach for your app or website. During the transition from wireframes into the final design, I create prototypes simulating final results before development.
            </p>
            </div>
        </div>
        </div>
        <BottomNav/>
    </>
  )
}

export default Service