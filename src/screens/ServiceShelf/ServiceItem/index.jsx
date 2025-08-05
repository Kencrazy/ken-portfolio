import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function ServiceItem() {
  const location = useLocation();
  const navigate = useNavigate();
  const { type } = location.state || {}; // Fallback in case state is undefined

  // Service data arrays with descriptions and types
  const websiteService = [
    { title: "E-commerce", description: "Build a fully functional online store with secure payments and inventory management.", type: "ecommerce",image:"https://i0.pickpik.com/photos/219/145/124/ecommerce-selling-online-online-sales-e-commerce-preview.jpg" },
    { title: "Portfolio", description: "Showcase your work with a stunning, responsive portfolio website.", type: "portfolio",image:"https://higheffect.com/wp-content/uploads/2025/05/high-effect-Portfolio-Featured-Image-jared-burnett-photo-1240x697.jpg" },
    { title: "Blog/Content", description: "Create a dynamic blog platform for engaging content delivery.", type: "blog",image:"https://cdn.prod.website-files.com/660d40f36cd694ec4c969685/66399abd142dbeb7f822bb29_63a26ee47adfdca00aa6ca4e_58f2f6ebc2933c49669c2861_form-abovefold-example.jpeg"},
    { title: "Landing Pages/Sales Funnels", description: "Design high-converting landing pages to drive sales.", type: "landing",image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5132f45f-9a32-41d1-b63f-9c42c64d7a67/dfixdxo-b9e82157-02cf-4849-8935-bb7bbaa7b598.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMzJmNDVmLTlhMzItNDFkMS1iNjNmLTljNDJjNjRkN2E2N1wvZGZpeGR4by1iOWU4MjE1Ny0wMmNmLTQ4NDktODkzNS1iYjdiYmFhN2I1OTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7EHjndWifoh-qsI94Q1vjcdyq4kxkF3Qnnzcr4eLIGY" },
    { title: "Non-profit/Charity", description: "Develop websites to support non-profit missions and donations.", type: "nonprofit",image:"https://cdn.prod.website-files.com/660d40f36cd694ec4c969685/66399abd142dbeb7f822bb24_63a26ee47adfdca07ca6ca4d_58f2f6ebc2933c49669c27d1_Stick-CTA-example.jpeg" },
    { title: "Education Platforms", description: "Build interactive platforms for online learning and courses.", type: "education",image:"https://cdn.prod.website-files.com/67a91ff2866b520b05a1ec89/67bcbdf910dd954c9c61bfb0_67b8a0e7fe53dd3dcda97515_revolutionize-your-lms.webp" },
    { title: "Membership/Subscription Sites", description: "Create subscription-based websites with user management.", type: "membership",image:"https://lh7-us.googleusercontent.com/dkMXLeK-IajoR5ccp-ggY_5aUTt-ewOPakazZpyFwZxN8s9TdvPHxuo4UsPGYgR7BdUDY_IJm5OrsI7YcFM3j-b-zoB4lJdDbtX2VF73ZqhcwtICGcAA7R5dIJTRpJQTVrMGoF-71SvTuUVZxVin6yk" },
  ];

  const apiService = [
    { title: "Custom Backend APIs", description: "Develop tailored APIs for seamless backend functionality.", type: "customapi",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2025/06/system_integration_testing.webp?lossy=1&quality=75&webp=92&ssl=1" },
    { title: "API Integration Projects", description: "Integrate third-party APIs to enhance your applications.", type: "apiintegration",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2025/07/ai_api_testing-1.webp?lossy=1&quality=75&webp=92&ssl=1" },
    { title: "Public APIs/Developer Portals", description: "Create public APIs with developer-friendly portals.", type: "publicapi",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2024/08/api-cover.jpg" },
    { title: "Internal APIs for Automation", description: "Build APIs to automate internal business processes.", type: "internalapi",image:"https://miro.medium.com/v2/resize:fit:1400/0*KztVa0VTO5003nsm.jpg" },
  ];

  const appService = [
    { title: "Mobile Apps", description: "Develop native or cross-platform mobile applications.", type: "mobileapp",image:"https://www.plannthat.com/wp-content/uploads/2021/12/Auto-Post-Feature-Image-14-1-2-1.jpg" },
    { title: "Web Apps", description: "Create responsive and scalable web applications.", type: "webapp",image:"https://miro.medium.com/v2/resize:fit:1200/1*xfXhO0WtW3ViZ252hwUHag.jpeg" },
    { title: "Hybrid Apps", description: "Build apps that work across web and mobile platforms.", type: "hybridapp",image:"https://upload.wikimedia.org/wikipedia/commons/8/8a/Hybrid_vs_Native_Apps_Header_1200x628_COMPRESSED.png" },
    { title: "Desktop Apps", description: "Develop powerful desktop applications for various OS.", type: "desktopapp",image:"https://upload.wikimedia.org/wikipedia/commons/b/bf/BackSlash_Elsa_Desktop.jpg" },
  ];

  const personalService = [
    { title: "Task Manager", description: "Create personalized task management tools for productivity.", type: "taskmanager",image:"https://cdn.prod.website-files.com/61f8bc0bcfbb27562c575b9a/677b4a5154d917065f303aa6_Tasks%201.png" },
    { title: "Money-Making Projects", description: "Develop side projects designed to generate revenue.", type: "moneymaking",image:"https://mapletreemedia.com/wp-content/uploads/2020/05/shutterstock_445928206.jpg" },
    { title: "Fun/Personal Use Projects", description: "Bring your creative ideas to life for personal enjoyment.", type: "funproject",image:"https://otiscreative.co.uk/wp-content/uploads/2021/06/creative-23.jpg" },
    { title: "Hardware/IoT Project (I am still learning)", description: "Experiment with IoT and hardware-integrated solutions.", type: "iotproject",image:"https://lh5.googleusercontent.com/proxy/ZeUsKepfsGI2lORne2AoZ_e7ujHOngZukWGSZdboc0coElFTBAZOFyeWzlyI7xfn5RN-vGnKW9ASll50EedwVdeyR20mtgNZQ36xfm4" },
  ];

  const businessService = [
    { title: "Company Profile Website", description: "Showcase your business with a professional website.", type: "companyprofile",image:"https://bluecrocus.ca/wp-content/uploads/2023/10/Biddinger-Asphalt-Solutions.jpg" },
    { title: "Booking/Appointment", description: "Build systems for scheduling and appointment management.", type: "booking",image:"https://simplybefound.com/wp-content/uploads/2020/07/blog-image-17.png" },
    { title: "Real Estate", description: "Create websites for property listings and real estate services.", type: "realestate",image:"https://cdn.prod.website-files.com/61e7f5a9afe5cfd509975fb1/64f7461dec36ae75992fff03_TELFORD_HOMES_MICROSITES_ipads.jpg" },
    { title: "Event Website", description: "Develop websites for event promotion and ticketing.", type: "event",image:"https://cdn.prod.website-files.com/660d40f36cd694ec4c969672/6697469315eb5b06785348a0_2.webp" },
  ];

  const hireService = [
    { title: "Build from Scratch", description: "Create a new website tailored to your specifications.", type: "buildfromscratch",image:"https://www.infintechdesigns.com/wp-content/uploads/2021/02/Web-Development-Service-e1643017613100.jpg" },
    { title: "Fix Bugs or Issues", description: "Debug and resolve issues in existing websites.", type: "fixbugs",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2024/03/cover-bug-tracking-tool.jpg" },
    { title: "Add new Features", description: "Enhance your website with new functionalities.", type: "addfeatures",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2025/06/system_integration_testing.webp?lossy=1&quality=75&webp=92&ssl=1" },
    { title: "Connect to third party tools/APIs", description: "Integrate external tools and APIs seamlessly.", type: "thirdparty",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2023/03/3-AI-requirements-management-tools-you-cant-ignore.jpg?lossy=1&quality=75&webp=92&ssl=1" },
  ];

  const testerService = [
    { title: "Manual Testing", description: "Perform thorough manual testing for quality assurance.", type: "manualtesting",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2025/04/ChatGPT-Image-Mar-31-2025-06_35_06-PM.jpg?lossy=1&quality=75&webp=92&ssl=1" },
    { title: "Automated Testing", description: "Implement automated tests for efficiency and coverage.", type: "automatedtesting",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2024/08/small-automation-cover.jpg" },
    { title: "Performance & Usability Testing", description: "Ensure optimal performance and user experience.", type: "performancetesting",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2025/04/Performance-Testing-tutorial.jpg" },
    { title: "Compatibility Testing", description: "Test across devices and browsers for compatibility.", type: "compatibilitytesting",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2023/05/cover-compatibility.jpg?lossy=1&quality=75&webp=92&ssl=1" },
  ];

  const aiService = [
    { title: "Integrating AI Into Existing Apps/Websites", description: "Add AI capabilities to your existing platforms.", type: "aiintegration",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2025/07/ai_functional_testing.webp?lossy=1&quality=75&webp=92&ssl=1" },
    { title: "Building AI Tools or SaaS", description: "Develop AI-powered tools or SaaS products.", type: "aitools",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2025/07/ai_functional_testing.webp?lossy=1&quality=75&webp=92&ssl=1" },
    { title: "Custom AI Model Training", description: "Train custom AI models for specific use cases.", type: "aimodeltraining",image:"https://erepa7ohg8r.exactdn.com/wp-content/uploads/2025/07/ai_functional_testing.webp?lossy=1&quality=75&webp=92&ssl=1" },
  ];

  // Map service type to the corresponding array
  const serviceMap = {
    website: websiteService,
    api: apiService,
    app: appService,
    personal: personalService,
    business: businessService,
    hire: hireService,
    tester: testerService,
    AI: aiService,
  };

  // Get the selected service array or default to empty array
  const selectedService = serviceMap[type] || [];

  // Fallback if no valid type is provided
  if (!type || selectedService.length === 0) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Service Not Found
          </h2>
          <p className="text-gray-200 text-center">
            Please select a valid service from the services page.
          </p>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate("/")}
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
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          {type.charAt(0).toUpperCase() + type.slice(1)} Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selectedService.map((item, index) => (
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
                  onClick={() => navigate("/contact")} 
                  className="relative select-none rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-800/20 hover:shadow-lg hover:shadow-gray-800/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-white/30 before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:transition-transform before:duration-500 hover:before:w-32 hover:before:h-32"
                >
                  Contact Us
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/detail", { state: { type: item.type } })}
                  className="relative select-none rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-800/20 hover:shadow-lg hover:shadow-gray-800/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-white/30 before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:transition-transform before:duration-500 hover:before:w-32 hover:before:h-32"
                >
                  View Projects
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
    </div>
  );
}