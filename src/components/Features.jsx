import React from "react";
import { FaShippingFast, FaUndo, FaHeadset, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-4xl mb-4 text-primary" />,
      title: "Free Shipping",
      desc: "On all orders over $100",
    },
    {
      icon: <FaUndo className="text-4xl mb-4 text-primary" />,
      title: "Easy Returns",
      desc: "30-day money back guarantee",
    },
    {
      icon: <FaHeadset className="text-4xl mb-4 text-primary" />,
      title: "24/7 Support",
      desc: "Dedicated support team",
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4 text-primary" />,
      title: "Secure Payment",
      desc: "100% secure checkout",
    },
  ];

  return (
    <div className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="card-body items-center text-center">
                {feature.icon}
                <h2 className="card-title text-xl">{feature.title}</h2>
                <p className="text-lg">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
