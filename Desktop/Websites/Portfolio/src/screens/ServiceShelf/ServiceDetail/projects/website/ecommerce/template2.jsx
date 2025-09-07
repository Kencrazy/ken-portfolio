import React from 'react';
import designwet2 from '../../../../../../assets/designwet2.png';
import aboutwet2 from '../../../../../../assets/aboutwet2.png';
import contactwet2 from '../../../../../../assets/contactwet2.png';
// hi
const WebsiteEcommerceTemplate2 = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-gray-100">
      {/* Main Template Image */}
      <header className="w-[80%] mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-4">E-Commerce Website Template 2</h1>
        <img
          src={designwet2}
          alt="E-Commerce Template 2 Preview"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </header>

      {/* Features Section */}
      <main className="w-[80%] mx-auto flex-grow py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Template Features</h2>

        {/* Design Section */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Modern Design</h3>
          <p className="mb-4">
            Captivate your audience with a sleek, modern design optimized for user engagement. The visually appealing layout is fully responsive, ensuring a seamless experience across desktops, tablets, and mobile devices, with customizable themes to match your brand.
          </p>
          <img
            src={designwet2}
            alt="Modern Design Example"
            className="w-full h-full object-cover rounded-lg"
          />
        </section>

        {/* About Section */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="mb-4">
            Share your brand’s story with a dedicated About page. Highlight your mission, values, and team with a clean, professional layout. This section builds trust with customers and integrates seamlessly with the rest of the template for a cohesive look.
          </p>
          <img
            src={aboutwet2}
            alt="About Us Example"
            className="w-full h-full object-cover rounded-lg"
          />
        </section>

        {/* Contact Section */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
          <p className="mb-4">
            Enable customers to reach out effortlessly with an integrated contact form. Fully customizable and equipped with spam protection, it supports inquiries, feedback, and customer support, ensuring effective communication with your audience.
          </p>
          <img
            src={contactwet2}
            alt="Contact Form Example"
            className="w-full h-full object-cover rounded-lg"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-4 text-center">
        <p>Contact us to purchase this template and elevate your online store!</p>
      </footer>
    </div>
  );
};

export default WebsiteEcommerceTemplate2;
// Done