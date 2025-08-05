import React, { useState } from 'react';
import './App.css';
import avatar from "./assets/twitch.png"

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className='container items-center mx-auto w-full flex flex-col justify-center'>
        <div 
          className='hovered flex flex-row gap-5' 
          onMouseEnter={() => setIsHovered(true)} // Show on hover
          onMouseLeave={() => setIsHovered(false)} // Hide when not hovered
        >
          <div className={`card2 transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div style={{backgroundImage:`url(${avatar})`}}  className="img">

            </div>
            <span className="heading">AllSupport</span>
            <p className='flex flex-row'>
              <svg onClick={() => window.open("https://x.com/allsupportcode", "_blank")} height="30" width="30" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className="icon">
                <path fill="white" d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"></path>
              </svg>
              <svg onClick={()=>window.open("https://www.facebook.com/profile.php?id=61558885425665","_blank")} height="30" width="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="icon">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
              </svg>
              <svg onClick={()=>window.open("https://github.com/AllSupportCode","_blank")} height="30" width="30" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className="icon">
                <path fill="white" d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"></path>
              </svg>
            </p>
          </div>

          <div className={`code-editor transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="editor-content">
              <code className="code">
                <p><span className="color-0">.code-editor </span> <span>&#123;</span></p>
                <p className="property">
                  <span className="color-2">Name</span><span>:</span>
                  <span className="color-1">AllSupportCode</span>;
                </p>
                <p className="property">
                  <span className="color-2">Age</span><span>:</span>
                  <span className="color-1">{new Date().getFullYear()-2007}</span>;
                </p>
                <span>&#125;</span>
              </code>
            </div>
          </div>

          <div className={`vscode transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} flex flex-wrap gap-6 justify-center items-center`}>
            <label className="text-gray-400 cursor-pointer">
              <input type="checkbox" className="hidden peer" />
              <div className="group flex flex-col gap-4 w-20 sm:w-32 h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-4 shadow-xl border-2 border-transparent transition-all duration-300 ease-in-out hover:border-indigo-500 hover:shadow-indigo-500/20 peer-checked:border-indigo-500 peer-checked:from-indigo-900/50 peer-checked:to-gray-900 peer-checked:translate-y-[-0.5rem]">
                <div className="relative">
                  <div className="w-12 h-12 mx-auto bg-indigo-500/20 rounded-lg border-2 border-indigo-500/40 group-hover:border-indigo-400 group-hover:bg-indigo-500/30 peer-checked:border-indigo-400 peer-checked:bg-indigo-500/30 transition-all duration-300">
                    <div className="flex flex-col gap-1 p-2">
                      <div className="h-1 w-8 bg-indigo-400/40 rounded-full"></div>
                      <div className="h-1 w-6 bg-indigo-400/40 rounded-full"></div>
                      <div className="h-1 w-7 bg-indigo-400/40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-6 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-indigo-400 group-hover:animate-pulse peer-checked:bg-indigo-400 peer-checked:animate-pulse transition-all duration-300"></div>
                </div>
                <div className="text-center">
                  <p className="font-medium text-sm group-hover:text-indigo-400 peer-checked:text-indigo-400 transition-colors duration-300">VS Code</p>
                  <p className="text-xs mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">Editor</p>
                </div>
                <div className="h-1 w-0 bg-indigo-500 rounded-full mx-auto group-hover:w-full peer-checked:w-full transition-all duration-300"></div>
              </div>
            </label>
          </div>
        </div>

        <div className="card flex flex-col items-center group transition-all duration-300 ease-in-out hover:scale-105" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="loader">
            <p>I </p>
            <div className="words">
              <span className="word">am a fullstack coder</span>
              <span className="word">admire the convenience of applications</span>
              <span className="word">love learning new features</span>
              <span className="word">sell websites (check it out)</span>
              <span className="word">love programming</span>
              <span className="word">am Ken Lê</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;