import React from 'react';
import designwet1 from '../../../../../../assets/designwet1.png';
import cartwet1 from '../../../../../../assets/cartwet1.png';
import discountwet1 from '../../../../../../assets/discountwet1.png';
import productwet1 from '../../../../../../assets/productwet1.png';
import commentwet1 from '../../../../../../assets/commentwet1.png';

export default function WebsiteEcommerceTemplate1() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col bg-gray-100">
      {/* Main Template Image */}
      <header className="w-[80%] mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-4">E-Commerce Website Template 1</h1>
        <img
          src={designwet1}
          alt="E-Commerce Template Preview"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </header>

      {/* Features Section */}
      <main className="w-[80%] mx-auto flex-grow py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Template Features</h2>

        {/* Cart System */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Cart System</h3>
          <p className="mb-4">
            Our intuitive cart system allows customers to add products, adjust quantities, and proceed to checkout seamlessly. With a user-friendly modal or sidebar, it ensures a smooth shopping experience across devices, reducing cart abandonment and boosting sales.
          </p>
          <img
            src={cartwet1}
            alt="Cart System Example"
            className="w-full h-full object-cover rounded-lg"
          />
        </section>

        {/* Discount System */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Discount System</h3>
          <p className="mb-4">
            Engage customers with flexible discounts, including percentage-based reductions and promo codes. Display original and discounted prices clearly on product cards and in the cart, encouraging purchases and supporting targeted marketing campaigns.
          </p>
          <img
            src={discountwet1}
            alt="Discount System Example"
            className="w-full h-full object-cover rounded-lg"
          />
        </section>

        {/* Product List */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Product List</h3>
          <p className="mb-4">
            Showcase your inventory in a responsive, filterable grid. Each product card displays key details and an “Add to Cart” button, making browsing easy. The scalable design supports small or large catalogs and integrates with inventory systems.
          </p>
          <img
            src={productwet1}
            alt="Product List Example"
            className="w-full h-full object-cover rounded-lg"
          />
        </section>

        {/* Comment and Rating System */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Comment & Rating System</h3>
          <p className="mb-4">
            Build trust with a review system that lets customers leave comments and 1–5 star ratings. A bad word filter ensures appropriate content, maintaining a professional platform. Display reviews and average ratings to influence buying decisions.
          </p>
          <img
            src={commentwet1}
            alt="Comment and Rating Example"
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
}