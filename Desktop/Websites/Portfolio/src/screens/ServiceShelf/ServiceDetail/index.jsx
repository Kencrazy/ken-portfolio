    import React, { useState } from "react";
    import { useLocation, useNavigate } from "react-router";
    import { serviceDetail } from "../../../components/constant";

export default function ServiceDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { type } = location.state || {};
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedTemplateStatus, setSelectedTemplateStatus] = useState(true);

  const selectedService = serviceDetail[type] || { templates: [] };

  const closeModal = () => {
    setSelectedTemplate(null);
    setSelectedTemplateStatus(true);
  };

  const handleViewProject = (template, isComplete) => {
    setSelectedTemplate(template);
    setSelectedTemplateStatus(isComplete);
  };

  if (!type || selectedService.templates.length === 0) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Projects Not Found
          </h2>
          <p className="text-gray-200 text-center">
            No projects available for this service. Please select a valid service.
          </p>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate(-1)}
              className="rounded-lg bg-gray-800 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-800/20 hover:shadow-lg hover:shadow-gray-800/40"
            >
              Back to Services
            </button>
          </div>
        </div>
      </div>
    );  
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          {type.charAt(0).toUpperCase() + type.slice(1)} Projects
        </h2>
        <div className="flex justify-center mb-12">
          <a
            href={selectedService.adminLink || ""}
            target="_blank"
            rel="noopener noreferrer"
            className="relative select-none rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-800/20 hover:shadow-lg hover:shadow-gray-800/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-white/30 before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:transition-transform before:duration-500 hover:before:w-32 hover:before:h-32"
          >
            View Admin
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selectedService.templates.map((item, index) => (
            <div
              key={index}
              className="relative flex w-full max-w-xs flex-col rounded-xl mb-4 bg-gray-900 text-white shadow-lg shadow-black/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 transition-all duration-300 mx-auto"
            >
              <div
                style={{
                  backgroundImage: item.image ? `url(${item.image})` : 'none',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                className="relative mx-3 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg shadow-black/40"
              ></div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                  {item.title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-gray-200 antialiased">
                  {item.description}
                </p>
              </div>
              <div className="p-6 pt-0 flex gap-4">
                <button
                  type="button"
                  onClick={() => handleViewProject(item.template, item.isComplete)}
                  className="relative select-none rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-800/20 hover:shadow-lg hover:shadow-gray-800/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-white/30 before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:transition-transform before:duration-500 hover:before:w-32 hover:before:h-32"
                >
                  View Project
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/contact", { state: { title: item.title } })}
                  className="relative select-none rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-800/20 hover:shadow-lg hover:shadow-gray-800/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-white/30 before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:transition-transform before:duration-500 hover:before:w-32 hover:before:h-32"
                >
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg bg-gray-800 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-800/20 hover:shadow-lg hover:shadow-gray-800/40"
          >
            Back to Services
          </button>
        </div>
      </div>

      {/* Slide-up Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
          <div
            className="w-full h-[90vh] bg-gray-900 rounded-t-xl shadow-lg shadow-black/50 transform transition-transform duration-300"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={closeModal}
                className="text-white text-3xl font-semibold"
              >
                &times;
              </button>
            </div>
            <div className="h-[calc(90vh-48px)] overflow-auto flex items-center justify-center">
              {selectedTemplateStatus ? (
                selectedTemplate
              ) : (
                <div className="text-center text-white text-xl font-semibold">
                  I haven't done this website yet
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}