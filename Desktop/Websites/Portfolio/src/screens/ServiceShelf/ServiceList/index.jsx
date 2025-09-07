import React from 'react';
import { useNavigate } from 'react-router';
import AI from "../../../assets/AI.png"
import api from "../../../assets/api.png"
import app from "../../../assets/app.png"
import business from "../../../assets/business.png"
import hire from "../../../assets/hire.png"
import personal from "../../../assets/personal.png"
import tester from "../../../assets/tester.png"
import website from "../../../assets/website.png"

const services = [
  { id: 1, title: 'Creating Website', description: 'Custom website development tailored to your needs.',image:website,type:"website" },
  { id: 2, title: 'API Development', description: 'Build robust and scalable APIs for your applications.' ,image:api,type:"api"},
  { id: 3, title: 'Application Development', description: 'Create user-friendly mobile and web applications.',image:app,type:"app" },
  { id: 4, title: 'Personal Project', description: 'Bring your personal project ideas to life.',image:personal,type:"personal" },
  { id: 5, title: 'Business Project', description: 'Develop solutions to scale your business operations.',image:business ,type:"business"},
  { id: 6, title: 'Hire Me for Website Help', description: 'Expert assistance to enhance your website.',image:hire ,type:"hire"},
  { id: 7, title: 'Website/Application Tester', description: 'Thorough testing to ensure quality and performance.',image:tester,type:"tester" },
  { id: 8, title: 'Custom AI Solutions', description: 'Creating an AI for unique requirements.',image:AI,type:"AI" },
];

export default function ServiceList() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative flex w-full max-w-xs flex-col rounded-xl mb-4 bg-gray-900 text-white shadow-lg shadow-black/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 transition-all duration-300"
            >
              <div style={{backgroundImage:`url(${service.image})`}} className="bg-center relative mx-3 -mt-6 h-45 overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg shadow-black/40"></div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                  {service.title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-gray-200 antialiased">
                  {service.description}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={()=>navigate("/service",{state: {type:service.type}})}
                  className="relative select-none rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-800/20 hover:shadow-lg hover:shadow-gray-800/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-white/30 before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:transition-transform before:duration-500 hover:before:w-32 hover:before:h-32"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}